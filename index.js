// Add your functions here
  const map =  (arr, func) => {
      return arr.map(n => func(n))
  }

  const reduce = (arr, func, startingPoint = 0) => {
    if (!startingPoint) {
        return arr.reduce((e, memo) => func(e, memo))
    } else {
        return arr.reduce((e, memo) => func(e, memo),startingPoint)
    }
  }