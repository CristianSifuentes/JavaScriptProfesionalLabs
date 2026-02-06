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

    const cols = out.cols;
    const kmax = a.c;

    parentPort.on('message', (msg) => {
        if(msg.type === 'shutdown') {
            process.exit(0);
            return;
        }
    });

    if(msg.type !== 'job') return;
    

} catch(e) {
    die(e?.stack ?? String(e));
}