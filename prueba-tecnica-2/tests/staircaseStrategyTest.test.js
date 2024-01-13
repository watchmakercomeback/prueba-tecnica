const assert = require('assert');
const StaircaseStrategy = require('../src/strategies/staircaseStrategy');

describe('StaircaseStrategy', () => {
  it('should print staircase for Agent A', () => {
    const strategy = new StaircaseStrategy('A');
    const result = strategy.execute(3);
    const expected = '  # #####';
    assert.strictEqual(result, expected);
  });

  it('should print staircase for Agent B', () => {
    const strategy = new StaircaseStrategy('B');
    const result = strategy.execute(3);
    const expected = '### ##  #';
    assert.strictEqual(result, expected);
  });

  it('should print staircase for Agent C', () => {
    const strategy = new StaircaseStrategy('C');
    const result = strategy.execute(2);
    const expected = ' ###### ##'
    assert.strictEqual(result, expected);
  });
});