export default function appendToEachArrayValue(array, appendString) {
  const temparray = [];
  for (const idx of array) {
    temparray.push(`${appendString}${idx}`);
  }

  return temparray;
}
