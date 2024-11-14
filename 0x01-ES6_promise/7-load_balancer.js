export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload])
console.log(loadBalancer(promiseUK, promiseFR))
    .then((res1) => res1)
    .catch((err) => console.log(err));
}
