const Agent = require('./src/agents/agent');
const MeanStrategy = require('./src/strategies/meanStrategy');
const HarmonicMeanStrategy = require('./src/strategies/harmonicMeanStrategy');
const MedianStrategy = require('./src/strategies/medianStrategy');
const StaircaseStrategy = require('./src/strategies/staircaseStrategy')

const agentA = new Agent(new MeanStrategy(), new StaircaseStrategy('A'));
const agentB = new Agent(new HarmonicMeanStrategy(), new StaircaseStrategy('B'));
const agentC = new Agent(new MedianStrategy(), new StaircaseStrategy('C'));

const data = [1,2,7,5,8,3,2,8,4];

const resultA = agentA.executeMediaStrategy(data);
const resultB = agentB.executeMediaStrategy(data);
const resultC = agentC.executeMediaStrategy(data);

const resultA2 = agentC.executeStairCaseStrategy(5);

console.log('Result A:', resultA);
console.log('Result B:', resultB);
console.log('Result C:', resultC);
