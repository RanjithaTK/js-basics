let array = [1, 2, 3, 4, 5, 6]
let a = array.filter((a) => a > 2)
console.log(a)

let filtered = []
for (let i = 0; i < array.length; i++) {
  if (array[i] > 2) {
    filtered.push(array[i])
  }
}
console.log(filtered)

///////////////////////////////
console.log(array.indexOf(2))
function index(array, n) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) {
      console.log(i)
    }
  }
}
index(array, 2)
///////////////////////////

let obj = [
  { name: "ABC", age: 18 },
  { name: "DEF", age: 30 },
  { name: "XYZ", age: 50 },
]

let o = obj.filter((el) => el.name != "XYZ")
console.log(o)
////////////////

function sum(array) {
  let s = 0
  for (let i = 0; i < array.length; i++) {
    s += array[i]
  }
  return s
}
// console.log(sum(array))
////////////////////////////
function sum(array) {
  return array.reduce((a, b) => a + b)
}
console.log(sum(array))
///////////////
function del(array, num) {
  let a = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== num) {
      a.push(array[i])
    }
  }
  return a
}
console.log(del(array, 2))
/////////////////////
function deleted(array, num) {
  return array.filter((a) => a !== num)
}
console.log(deleted(array, 2))
/////////////////////
// function deleteno(array,index){
//     return array.filter((a)=>a[index])
// }
