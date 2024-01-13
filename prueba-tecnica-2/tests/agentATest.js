const assert = require('assert');
const AgentA = require('../agents/agentA');
const MeanStrategy = require('../strategies/meanStrategy');

describe('AgentA', () => {
  it('should calculate mean using MeanStrategy', () => {
    const agentA = new AgentA(new MeanStrategy());
    const result = agentA.executeStrategy([1, 2, 3, 4, 5]);
    assert.strictEqual(result, 3);
  });
});