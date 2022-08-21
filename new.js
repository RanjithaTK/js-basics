// const fetch = require("node-fetch")
const axios = require("axios")
let api = "https://data.covid19india.org/data.json"
// let response = fetch(api).then((res) => console.log(res))
// async function funcName(api) {
//   const response = await fetch(api)
//   var data = await response.json()
//   return data
// }
// console.log(funcName(api))
// function apiFetch(api) {
//   //   fetch(api)
//   //     .then((res) => res.json())
//   //     .then((res) => console.log(res))
//   fetch(api)
//     .then((x) => x.text())
//     .then((y) => myDisplay(y))
// }
// console.log(apiFetch(api))
// fetch(api)
//   .then((res) => res.json())
//   .then((json) => console.log(json))

axios.get(api).then(function (response) {
  console.log(response)
})
