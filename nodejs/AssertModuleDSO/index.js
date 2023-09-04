const assert = require("node:assert");

assert(true);
assert.equal(3, 3, "Not OK!");
assert.deepEqual(3, 3, "Not OK!");
assert.strictEqual(3, 3, "Not OK!");
assert.deepStrictEqual(3, 3, "Not OK!");
assert.ok(3);
