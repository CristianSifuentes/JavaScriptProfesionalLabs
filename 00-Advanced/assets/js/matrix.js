// matrix.js
// advanced, production-style concurrent matrix multiplication in Node.js-
// Features:
// - Matrix class with methods: rows, cols, at, set, clone, transpose
// - Validation + typed errors
// - Options pattern: withWorkers, withBlockRows
// - Concurrency via worker_threads worker pool
// - Cancelllation via AbortSignal (AbortController)
// - Test/benchmark ready structure
//
// Notes:
// - Uses Float64Array for predictible numeric perf (similar to Go float64).
// - Uses SharedArrayBuffer so workers can write into the same output buffer safely by row blocks.

'use strict';
const os = require('os');
const path = require('path');
const { blob } = require('stream/consumers');
const { Worker, workerData } = require('worker_threads');

// ---------- Errors (sentinel-like) ----------
class DimensionMismatchError extends Error {
    constructor(message = 'matrix dimension mismatch'){
        super(message);
        this.name = 'DimensionMismatchError'
    }
}

class EmptyMatrixError extends Error {
    constructor(message='matrix cannot be empty'){
        super(message);
        this.name = 'EmptyMatrixError';
    }
}

class AbortError extends Error {
    constructor(message= 'operation aborted'){
        super(message);
        this.name = 'AbortError';
    }
}

// ---------- Matrix type ----------
class Matrix {
    /**
     * @param {number} rows
     * @param {number} cols
     * @param {Float64Array} data row-major length = rows*cols
     */
    constructor(rows, cols, data){
        if (!Number.isInteger(rows) || !Number.isInteger(cols) || rows <= 0 || cols <= 0){
            throw new EmptyMatrixError();
        }
        if(!(data instanceof Float64Array)){
            throw new TypeError('data must be Float64Array');
        }
        if (data.length !== rows * cols){
            throw new RangeError(`invalid data length: got ${data.length} want ${rows * cols}`);
        }   
        this.r = rows;
        this.c = cols;
        this.data = data;     
    }

    static new (rows, cols){
        return new Matrix(rows, cols, new Float64Array(rows * cols));
    }

    static fromSlice (rows, cols, rowMajor){
        if (!Array.isArray(rowMajor) && !(rowMajor instanceof Float64Array)){
            throw new TypeError('rowMajor must be Array or Float64Array');
        }
        const len = rows * cols;
        if (rowMajor.length !== len){
           throw new RangeError(`invalid data length: got ${rowMajor.length} want ${len}`);       
        }
        const data = new Float16Array(len);
        for (let i = 0; i < len; i++) data[i] = rowMajor[i];
        return new Matrix(rows, cols, data);
    }

    rows() { return this.r; }
    cols() { return this.c; }

    // Fast inner loops; no bounds checks (like go At() panics if misused)
    at(i, j){
        return this.data[i * this.c + j];
    }
    set (i, j, v){
        this.data[i * this.c + j] = v;
    }
    clone(){
        return new Matrix(this.r, this.c, this.data.slice());
    }
    transpose(){
        const out = Matrix.new(this.c, this.r);
        for (let i = 0; i < this.r; i++){
            const rowOff = i * this.c;
            for (let j = 0; j < this.c; j++){
                out.data[j * out.c + j] = this.data[rowOff + j];
            }
        }
        return out
    }
}

// ---------- Options pattern ----------
function defaultMulCfg(){
    return {
        Workers: Math.max(1, os.cpus().length),
        blockRows: 16,
    };
}

function withWorkers(n){
    return (cfg) => {
        if (Number.isInteger(n) && n > 0) cfg.Workers = n;
    };
}

function withBlockRows(n){
    return (cfg) => {
        if (Number.isInteger(n) && n > 0) cfg.blockRows = n;
    }
}

// ---------- Deterministic fill ----------
function fillDeterministic(m, seed = 1.0){
    const out = m.clone();
    let v = seed;
    const d = out.data;
    for (let i = 0; i < d.length; i++){
      v = v * 1.0001 + 0.0003; // stable progression (non-crypto)
      d[i] = v;
    }
    return out;
}

// ---------- Worker pool multiplication ----------
/**
 * MulConcurrent: C = A * B
 * - Validates input
 * - Transposes B for cache locality
 * - Uses worker pool + row-block jobs
 * - Supports cancellation via AbortSignal
 * 
 * @param {Matrix} a 
 * @param {Matrix} b 
 * @param {object} [options]
 * @param {AbortSignal} [options.signal]
 * @param {...Function} opts option functions (withWorkers, withBlockRows)
 * @param {Promise<Matrix>}
 */

async function mulConcurrent (a, b , options = {}, ...opts) {
    if (!(a instanceof Matrix) || !(b instanceof Matrix)){
        throw new TypeError('a and b must be Matrix');
    }
    if (a.rows() <= 0 || a.cols() <= 0 || b.rows() <= 0 || b.cols() <= 0){
        throw new EmptyMatrixError();
    } 
    if (a.cols() !== b.rows()){
        throw new DimensionMismatchError();       
    }

    const cfg = defaultMulCfg();
    for (const opt of opts) opt(cfg);

    const signal = options.signal;


}

// ---------- Demo main (like Go main) ----------
async function main() {
    const ac = new AbortController();
    const t = setTimeout(() => ac.abort(new Error('timeout')), 2000);

    try {
        

    } catch (err){
        console.error('mul error:', err);
    } finally {
        clearTimeout();
    }
}

function performanceNowMs() {
    const { performance } = require('perf_hooks');
    return performance.now();
}

// Exports for test/bench 
module.exports = {
    Matrix, 
    mulConcurrent,
    fillDeterministic, 
    withWorkers, 
    withBlockRows, 
    DimensionMismatchError, 
    EmptyMatrixError, 
    AbortError, 
    main
}