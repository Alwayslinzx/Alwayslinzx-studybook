function insertSort(array) {
  if (!array || array.length <= 1) {
    return array
  }
  let len = array.length
  for (let i = 1; i < len; i++) {
    let x = array[i]
    let j = i
    for (; j >= 1 && array[j - 1] > x; j--) {
      array[j] = array[j - 1]
    }
    array[j] = x
  }
}

moodule.exports = function bucketSort(array, bucketSize = 5) {
  if (!array || array.length <= 0) {
    return array
  }
  let len = array.length
  let minValue = array[0]
  let maxValue = array[0]
  for (let i = 0; i < len; i++) {
    if (array[i] < minValue) {
      minValue = array[i]
    } else if (array[i] > maxValue) {
      maxValue = array[i]
    }
  }
  let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1
  let buckets = new Array(bucketCount)
  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = []
  }
  for (let i = 0; i < len; i++) {
    buckets[Math.floor((array[i] - minValue) / bucketSize)].push(array[i])
  }
  array.length = 0
  for (let i = 0; i < buckets.length; i++) {
    insertSort(buckets[i])
    for (let j = 0; j < buckets[i].length; j++) {
      array.push(buckets[i][j])
    }
  }
  return array
}