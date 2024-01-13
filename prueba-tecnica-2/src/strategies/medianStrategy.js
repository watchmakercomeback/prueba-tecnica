const MathUtils = require('../utils/mathUtils');
class MedianStrategy {
  constructor() {
    this.strategy = "media"
  }
  execute(data) {
    if (data.length === 0) {
      throw new Error('Array vacío. No se puede calcular la mediana.');
    }

    const sortedData = MathUtils.sortArray(data);
    const middle = Math.floor(sortedData.length / 2);

    if (sortedData.length % 2 === 0) {
      return (sortedData[middle - 1] + sortedData[middle]) / 2;
    } else {
      return sortedData[middle];
    }
  }
  }

  module.exports = MedianStrategy