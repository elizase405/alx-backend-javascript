export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.all([chinaDownload, USDownload])
    .then(([res1, res2]) => {
      console.log(res1)
      console.log(res2)
    })
    .catch((err) => console.log(err))
}
