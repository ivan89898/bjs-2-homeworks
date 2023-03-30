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

  const S = amount - contribution;
  const P = ((1 / 12) * percent) / 100;
  const n = date;
  const amountPerMonth = (S * (P + P / ((1 + P) ** n - 1)));
  const totalAmount = parseFloat(amountPerMonth * date).toFixed(2);

  return parseFloat(totalAmount);
}
