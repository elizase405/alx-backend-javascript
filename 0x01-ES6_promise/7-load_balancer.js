export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload])
    .then((res1) => res1)
    .catch((err) => console.log(err));
}
