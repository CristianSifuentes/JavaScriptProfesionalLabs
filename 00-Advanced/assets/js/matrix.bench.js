// matrix.bench.js
'use strict';

const os = require('perf_hooks');
const { 
   Matrix,
   mulConcurrent,
   fillDeterministic,
   withBlockRows,
   withBlockRows,
   withWorkers
 } = require('./matrix');

 async function bench(name, fn, iters = 5) {
    // Warm up
    await fn();
    const start = performance.now();
    for(let i= 0; i < iters; i++) await fn();
    const elapsed = performance.now() - start;


    console.log(`${name}: ${elapsed.toFixed(2)}ms`);


 }

 (async() => {
   const size  = 512;
   const baseA = Matrix.new(size, size);
   const baseB = Matrix.new(size, size);

   const a = fillDeterministic(baseA, 1.0);
   const b = fillDeterministic(baseB, 2.0);

   await bench('MulConcurrent_512', async () => {
          await  mulConcurrent(
            a, 
            b,
            {}, 
            withWorkers(os.cpus().length),
            withBlockRows(32)
          );
   }, 3);

 })(); 