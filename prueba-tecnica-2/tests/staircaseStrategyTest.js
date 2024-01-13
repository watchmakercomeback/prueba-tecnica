const assert = require('assert');
const StaircaseStrategy = require('../strategies/staircaseStrategy');

describe('StaircaseStrategy', () => {
  it('should print staircase for Agent A', () => {
    const strategy = new StaircaseStrategy('A');
    const result = strategy.printStaircase(5);
    const expected = 'Implementar la lógica para imprimir la escalera según el tipo de agente A';
    assert.strictEqual(result, expected);
  });

  it('should print staircase for Agent B', () => {
    const strategy = new StaircaseStrategy('B');
    const result = strategy.printStaircase(5);
    const expected = 'Implementar la lógica para imprimir la escalera según el tipo de agente B';
    assert.strictEqual(result, expected);
  });

  it('should print staircase for Agent C', () => {
    const strategy = new StaircaseStrategy('C');
    const result = strategy.printStaircase(5);
    const expected = 'Implementar la lógica para imprimir la escalera según el tipo de agente C';
    assert.strictEqual(result, expected);
  });
});