const calculadora = (operador, numero1, numero2) => {
    switch (operador) {
      case '+':
        return parseInt(numero1) + parseInt(numero2);
      case '-':
        return numero1 - numero2;
      case '*':
        return numero1 * numero2;
      case '/':
        return numero1 / numero2;
      default:
        return "Operador inválido"
    }
  }

console.log(calculadora("/", 1,1))
console.log(calculadora("*", 1,1))
console.log(calculadora("+", 1,1))
console.log(calculadora("-", 1,1))