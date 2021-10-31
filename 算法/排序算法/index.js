const selectSort = require('./selectSort')
const quickSort = require('./quickSort')
const bubbleSort = require('./bubbleSort')
const insertSort = require('./insertSort')

const array1 = [5, 4, 3, 2, 1];
selectSort(array1)
console.log('selectSort result', array1)

const array2 = [5, 4, 3, 2, 1];
quickSort(array2, 0, array2.length - 1)
console.log('quickSort result', array2)

const array3 = [5, 4, 3, 2, 1];
bubbleSort(array3)
console.log('bubbleSort result', array3)

const array4 = [5, 4, 3, 2, 1];
insertSort(array4)
console.log('insertSort result', array4)
