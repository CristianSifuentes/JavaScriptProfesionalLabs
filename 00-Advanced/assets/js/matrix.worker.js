// matrix.worker.js
'use strict';
const { type } = require('os');
const { parentPort, workerData } = require('worker_threads');


function die(message) {
  parentPort.postMessage({type: 'error', message});
}

try {
    const a = workerData.a;
    const bt = workerData.bt;
    const out = workerData.out;

    const aData = new Float64Array(a.sab);
    const btData = new Float64Array(bt.sab);
    const outData = new Float64Array(out.sab);

} catch(e) {
    die(e?.stack ?? String(e));
}