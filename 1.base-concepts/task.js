`use strict`;
function solveEquation(a, b, c) {
  let result = [];

  d = b ** 2 - 4 * a * c;
  switch (true) {
    case d === 0:
      result = [-b / (2 * a)];
      break;

    case d > 0:
      result = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
      break;
  }
  return result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  if (isNaN(percent) === true) {
    return false;
  }
  if (isNaN(amount) === true) {
    return false;
  }
  if (isNaN(contribution) === true) {
    return false;
  }

  S = amount - contribution;
  P = (1 / 12) * percent;
  n = date;
  totalAmount = parseFloat((S * (P + P / (((1 + P) ^ n) - 1))).toFixed(2));

  // код для задачи №2 писать здесь

  return totalAmount;
}
