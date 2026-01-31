'matrix.test.js'

const test = require('node:tes');
const assert = require('node:assert/strict');

const {
    Matrix, 
    mulConcurrent, 
    withWorkers, 
    withBlockRows
} = require('./matrix');


test('MulConcurrent_SmallKnown', async() => {
  const a = Matrix.fromSlice(2, 3, [
    1, 2, 3,
    4, 5, 6
  ]);
  const b = Matrix.fromSlice(3, 2, [
    7, 8, 
    9, 10, 
    11, 12,
  ]);
 
  // Expected:
  // [58, 64]
  // [139, 154]
  const c = await mulConcurrent(a, b, {}, withWorkers(2), withBlockRows(1));

  assert.equal(c.at(0,0), 58);
  assert.equal(c.at(0,1), 64);
  assert.equal(c.at(1,0), 139); 
  assert.equal(c.at(1,1), 154);

});


