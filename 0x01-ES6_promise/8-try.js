export default function divideFunction(numerator, denominator) {
  let res = numerator / denominator;
  if (denominator === 0) {
    return new Error('cannot divide by 0');
  }
  return res;
}
