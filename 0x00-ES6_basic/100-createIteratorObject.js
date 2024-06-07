export default function createIteratorObject(report) {
  const emp = Object.entries(report.allEmployees);
  const iterator = [];

  for (const i of emp) {
    const name = i.pop();
    iterator.push(...name);
  }

  return iterator;
}
