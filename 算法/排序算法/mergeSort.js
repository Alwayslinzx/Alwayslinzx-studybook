// 归并排序

module.exports = function mergeSort(array) {
  if (!array || array.length < 2) {
    return array
  }
  let len = array.length
  let middle = Math.floor(len / 2)
  let left = array.slice(0, middle)
  let right = array.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let res = []
  while(left.length && right.length) {
    if (left[0] <= right[0]) {
      res.push(left.shift())
    } else {
      res.push(right.shift())
    }
  }
  while(left.length) {
    res.push(left.shift())
  }
  while(right.length) {
    res.push(right.shift())
  }
  return res
}