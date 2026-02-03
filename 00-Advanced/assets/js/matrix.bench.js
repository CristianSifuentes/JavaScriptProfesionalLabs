// matrix.bench.js
'use strict';

const os = require('perf_hooks');
const { 
   Matrix,
   mulConcurrent,
   fillDeterministic,
   withBlockRows,
   withBlockRows
 } = require('./matrix');

 async function bench(name, fn, iters = 5) {
    // Warm up
    await fn();
    const start = performance.now();
    for(let i= 0; i < iters; i++) await fn();


 }

 (async() => {

 })();