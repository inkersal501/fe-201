import { sum, diff } from "./math.js";
import { COMPANY_NAME } from "./constant.js";

const multiplicationOfSumAndDiff = (a, b) => {
  const summation = sum(a, b);
  const difference = diff(a, b);
  console.log("Company Name: ", COMPANY_NAME);

  return summation * difference;
};

const result = multiplicationOfSumAndDiff(4, 2);
console.log(result);
