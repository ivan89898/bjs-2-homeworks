function compareArrays(arr1, arr2) {
  const result =
    arr1.length === arr2.length &&
    arr1.every((value, index) => value === arr2[index]);
  return result;
}
function getUsersNamesInAgeRange(arr, gender) {
  let result =
    arr
      .filter(() => gender === "мужской")
      .map((item) => item.age)
      .reduce((a, b) => a + b / arr.length, 0) ||
    arr
      .filter(() => gender === "женский")
      .map((item) => item.age)
      .reduce((a, b) => a + b / arr.length, 0);

  return result; // array
}
