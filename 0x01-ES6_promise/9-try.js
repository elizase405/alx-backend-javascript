export default function guardrail(func) {
  const queue = [];
  try {
    queue.push(func());
    queue.push('Guardrail was processed');
    return queue;
  } catch (err) {
    queue.push(err.message);
    queue.push('Guardrail was processed');
    return queue;
  }
}
