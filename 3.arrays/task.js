function compareArrays(arr1, arr2) {
  const result =
    arr1.length === arr2.length &&
    arr1.every((value, index) => value === arr2[index]);
  return result;
}
function average(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
function getUsersNamesInAgeRange(users, gender) {
  result = users
    .filter((users) => users.gender === gender)
    .map((item) => item.age);
  return average(result) || 0; 
}
