class StaircaseStrategy {
    constructor(agentType) {
      this.agentType = agentType;
    }
  
    execute(n) {
      // Implementar la lógica para imprimir la escalera según el tipo de agente
      switch (this.agentType) {
        case 'A':
          return this.printStaircaseA(n);
        case 'B':
          return this.printStaircaseB(n);
        case 'C':
          return this.printStaircaseC(n);
        default:
          throw new Error('Tipo de agente no válido.');
      }
    }
  
    // Implementar lógica específica para cada tipo de agente
    printStaircaseA(n) {
      let valueTest = ''
      if (n > 0 && n < 100) {
        for (let i = 1; i <= n; i++) {
          const espacios = ' '.repeat(n - i);
          const escalones = '#'.repeat(i);
          console.log(espacios + escalones);
          valueTest = valueTest + espacios + escalones
        }
        return valueTest
      } else {
        console.log("Por favor, ingresa un número válido (0 < n < 100).");
      }
    }
  
    printStaircaseB(n) {
      let valueTest = ''
      if (n > 0 && n < 100) {
        for (let i = n; i >= 1; i--) {
          const espacios = ' '.repeat(n - i);
          const escalones = '#'.repeat(i);
          console.log(espacios + escalones);
          valueTest = valueTest + espacios + escalones
        }
        return valueTest
      } else {
        console.log("Por favor, ingresa un número válido (0 < n < 100).");
      }
    }
  
    printStaircaseC(n) {
      let valueTest = ''
      if (n > 0 && n < 100) {
        // Imprimir parte superior del rombo
        for (let i = 1; i <= n; i += 1) {
          const espacios = ' '.repeat((n - i));
          const escalones = '#'.repeat(n+(2*(i-1)));
          console.log(espacios + escalones);
          valueTest = valueTest + espacios + escalones
        }
    
        // Imprimir parte inferior del rombo
        for (let i = n-1; i >= 1; i -= 1) {
          const espacios = ' '.repeat((n - i));
          const escalones = '#'.repeat(n+(2*(i-1)));
          console.log(espacios + escalones);
          valueTest = valueTest + espacios + escalones
        }
        return valueTest
      } else {
        console.log("Por favor, ingresa un número válido (0 < n < 100).");
      }
    }
  }
  
  module.exports = StaircaseStrategy;