import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  numberOne = new Big(numberOne);
  numberTwo = new Big(numberTwo);

  switch (operation) {
    case '+':
      return numberOne.plus(numberTwo).toString();

    case '-':
      return numberOne.minus(numberTwo).toString();

    case 'X':
      return numberOne.times(numberTwo).toString();


    case '/':
      return numberOne.div(numberTwo).toString();

    // SINCE THIS IS FOR CALCULATING PERCENTILE, THE numberTwo is always equal to 100
    case '%':
      return numberOne.div(numberTwo).toString();

    default:
      console.log('Unknown operation');
  }
};


export default operate;
