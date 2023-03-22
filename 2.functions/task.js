function getArrayParams(...arr) {
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
  }

  let sumWithInitial = arr.reduce((a, b) => a + b, 0);
  avg = Number((sumWithInitial / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = arr.reduce((a, b) => a + b, 0);
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let max = Math.max.apply(null, arr);
  let min = Math.min.apply(null, arr);
  if (max < 0) {
    return 0;
  }
  return Math.abs(max - min);
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = arr
    .filter((Number) => Number % 2 === 0)
    .reduce((a, b) => a + b, 0);
  let sumOddElement = arr
    .filter((Number) => Number % 2 === 1)
    .reduce((a, b) => a + b, 0);
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let evenElements = arr.filter((Number) => Number % 2 === 0);
  let sum = 0;
  for (let i = 0; i < evenElements.length; i++) {
    sum += evenElements[i];
  }
  if (sum <= 0) {
    return 0;
  }
  return sum / evenElements.length;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const sum = func(...arrOfArr[i]);
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}
