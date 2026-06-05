const test = require('node:test');
const assert = require('assert');
const { sumar } = require('./index');

test('Debe sumar dos numeros correctamente', () => {
    assert.strictEqual(sumar(2, 3), 5);
})
