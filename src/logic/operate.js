import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const numberOne1 = new Big(numberOne);
  const numberTwo2 = new Big(numberTwo);

  switch (operation) {
    case '+':
      return numberOne1.plus(numberTwo2).toString();

    case '-':
      return numberOne1.minus(numberTwo2).toString();

    case 'X':
      return numberOne1.times(numberTwo2).toString();


    case '/':
      return numberOne1.div(numberTwo2).toString();

    // SINCE THIS IS FOR CALCULATING PERCENTILE, THE numberTwo is always equal to 100
    case '%':
      return numberOne1.div(numberTwo2).toString();

    default:
      return 'Unknown operation';
  }
};


export default operate;
