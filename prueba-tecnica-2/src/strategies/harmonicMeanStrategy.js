class HarmonicMeanStrategy {
  constructor() {
    this.strategy = "media"
  }
  execute(data) {
    if (data.length === 0) {
      throw new Error('Array vacío. No se puede calcular la media armónica.');
    }

    const reciprocalSum = data.reduce((acc, num) => acc + 1 / num, 0);
    return data.length / reciprocalSum;
  }
}

module.exports = HarmonicMeanStrategy