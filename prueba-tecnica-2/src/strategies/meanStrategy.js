class MeanStrategy {
  constructor() {
    this.strategy = "media"
  }
  execute(data) {
    if (data.length === 0) {
      throw new Error('Array vacío. No se puede calcular la media.');
    }

    const sum = data.reduce((acc, num) => acc + num, 0);
    return sum / data.length;
  }
}
module.exports = MeanStrategy