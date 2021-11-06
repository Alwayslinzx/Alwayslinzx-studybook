const selectSort = require('./selectSort')
const quickSort = require('./quickSort')
const bubbleSort = require('./bubbleSort')
const insertSort = require('./insertSort')
const shellSort = require('./shellSort')
const countSort = require('./countSort')
const mergeSort = require('./mergeSort')
const bucketSort = require('./bucketSort')

const array1 = [6, 7, 8, 9, 0, 5, 4, 3, 2, 1];
selectSort(array1)
console.log('selectSort result', array1)

const array2 = [6, 7, 8, 9, 0, 5, 4, 3, 2, 1];
quickSort(array2, 0, array2.length - 1)
console.log('quickSort result', array2)

const array3 = [6, 7, 8, 9, 0, 5, 4, 3, 2, 1];
bubbleSort(array3)
console.log('bubbleSort result', array3)

const array4 = [6, 7, 8, 9, 0, 5, 4, 3, 2, 1];
insertSort(array4)
console.log('insertSort result', array4)

const array5 = [6, 7, 8, 9, 0, 5, 4, 3, 2, 1];
shellSort(array5)
console.log('shellSort result', array5)

const array6 = [6, 7, 8, 9, 0, 5, 4, 3, 2, 1];
const array6Res = countSort(array6)
console.log('countSort result', array6Res)

const array7 = [6, 7, 8, 9, 0, 5, 4, 3, 2, 1];
const array7Res = mergeSort(array7)
console.log('mergeSort result', array7Res)

const array8 = [6, 7, 8, 9, 0, 5, 4, 3, 2, 1];
const array8Res = bucketSort(array8)
console.log('bucketSort result', array8Res)

// const array8 = [6, 7, 8, 8, 9, 0, 5, 4, 3, 2, 1, 99, 45, 12, 34, 56, 32, 93, 33, 22, 11];