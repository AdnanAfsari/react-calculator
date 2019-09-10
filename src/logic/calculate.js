import operate from './operate';


const calculate = (dataObj, button) => {
  if (button === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
      error: null,
    };
  }

  if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(parseInt(button, 10))) {
    // To prevent typing unnecessary zeros before an integer e.g. 03 instead of simply 3
    if (button === '0' && dataObj.next === null && dataObj.total === null) {
      return {};
    }
    // If there is an operation
    if (dataObj.operation) {
      if (dataObj.next) {
        return {
          next: dataObj.next + button,
        };
      }
      // if there's no dataObj.next
      return {
        next: button,
      };
    }

    // If there is no operation append the button to dataObj.next coming from the state
    if (dataObj.next) {
      return {
        next: dataObj.next + button,
        total: null,
      };
    }
    // If there's no dataObj.next coming just set the next to the button
    return {
      next: button,
      total: null,
    };
  }


  if (button === '.') {
    if (dataObj.next) {
      if (dataObj.next.includes('.')) {
        return {};
      }
      return {
        next: dataObj.next + button,
      };
    }

    if (dataObj.operation) {
      return {
        next: '0.',
      };
    }

    if (dataObj.total) {
      if (dataObj.total.includes('.')) {
        return {};
      }
      return {
        next: `${dataObj.total}.`,
      };
    }

    return {
      next: '0.',
    };
  }


  // If the '=' is pressed and there is a value in dataObj.next and also an operator
  if (button === '=') {
    if (dataObj.next && dataObj.operation) {
      try {
        return {
          total: operate(dataObj.total, dataObj.next, dataObj.operation),
          next: null,
          operation: null,
        };
      } catch (e) {
        return {
          error: 'Error!! Press AC to reset.',
          next: null,
          total: null,
          operation: null,
        };
      }
    } else {
      return {};
    }
  }


  if (button === '+/-') {
    if (dataObj.next) {
      return {
        next: (-1 * parseFloat(dataObj.next)).toString(),
      };
    }
    if (dataObj.total) {
      return {
        total: (-1 * parseFloat(dataObj.total)).toString(),
      };
    }
    return {};
  }


  // TAKES CARE OF JUST '%'
  if (button === '%') {
    if (dataObj.operation) {
      dataObj.total = operate(dataObj.total, dataObj.next, dataObj.operation);
      dataObj.next = null;
      dataObj.operation = null;
    }
    if (dataObj.next) {
      dataObj.total = dataObj.next;
      dataObj.next = null;
      dataObj.operation = null;
    }
    return {
      total: operate(dataObj.total, 100, '%'),
    };
  }


  // To ensure continuity in operation without pressing '='
  if (dataObj.operation && dataObj.next) {
    try {
      dataObj.total = operate(dataObj.total, dataObj.next, dataObj.operation);
      dataObj.next = null;
      dataObj.operation = button;
    } catch (e) {
      dataObj.error = 'Error!!! Press AC to reset.';
      dataObj.next = null;
      dataObj.total = null;
      dataObj.operation = null;
    }
  }


  // The user hasn't typed a number yet, just save the operation
  if (!dataObj.next) {
    return { operation: button };
  }


  return {
    total: dataObj.next,
    next: null,
    operation: button,
    error: null,
  };
};


export default calculate;
