export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload])
    .then((res1) => console.log(res1))
    .catch((err) => console.log(err));
}
