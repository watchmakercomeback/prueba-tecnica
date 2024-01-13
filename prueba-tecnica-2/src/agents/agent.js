// agentA.js
class Agent {
    constructor(mediaStrategy, stairCaseStrategy) {
      this.mediaStrategy = mediaStrategy;
      this.stairCaseStrategy = stairCaseStrategy;
    }
  
    executeMediaStrategy(data) {
      return this.mediaStrategy.execute(data);
    }

    executeStairCaseStrategy(n) {
      return this.stairCaseStrategy.execute(n)
    }
  }
  
module.exports = Agent;