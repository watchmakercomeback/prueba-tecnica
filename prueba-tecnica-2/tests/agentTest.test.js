const assert = require('assert');
const Agent = require('../src/agents/agent');
const MeanStrategy = require('../src/strategies/meanStrategy');
const StaircaseStrategy = require('../src/strategies/staircaseStrategy')
const HarmonicMeanStrategy = require('../src/strategies/harmonicMeanStrategy')
const MedianStrategy = require('../src/strategies/medianStrategy')
describe('Agent', () => {
  it('should calculate mean using MeanStrategy', () => {
    const agent = new Agent(new MeanStrategy(), new StaircaseStrategy('A'));
    const result = agent.executeMediaStrategy([1, 2, 3, 4, 5]);
    assert.strictEqual(result, 3);
  });
  it('should calculate harmonic mean using HarmonicMeanStrategy', () => {
    const agent = new Agent(new HarmonicMeanStrategy(), new StaircaseStrategy('B'));
    const result = agent.executeMediaStrategy([1, 2, 3, 4, 5]);
    assert.strictEqual(result, 2.18978102189781);
  });

  it('should calculate median using MedianStrategy', () => {
    const agent = new Agent(new MedianStrategy(), new StaircaseStrategy('C'));
    const result = agent.executeMediaStrategy([1, 2, 3,4, 4, 5]);
    assert.strictEqual(result, 3.5);
  });
});