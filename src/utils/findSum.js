const findSumInBunch = arr => {
  if (!arr.length) return 0;

  let result = 0;
  let i = 0;
  do {
    const a = arr[i];
    const b = arr[i + 1];
    if (typeof b === "undefined") {
      result += a;
      break;
    }
    const sum = a + b;
    const mult = a * b;
    if (mult > sum) {
      result += mult;
      i += 2;
    } else {
      result += a;
      i++;
    }
  } while (i < arr.length);
  return result;
};

const findSum = arr => {
  arr.sort((a, b) => a - b);
  const negatives = arr.filter(item => item <= 0);
  const positives = arr.filter(item => item > 0).reverse();

  return findSumInBunch(negatives) + findSumInBunch(positives);
};

export default findSum;
