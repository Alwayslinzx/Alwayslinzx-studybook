const selectSort = require('./selectSort')
const quickSort = require('./quickSort')

const array1 = [5, 4, 3, 2, 1];
selectSort(array1)
console.log('selectSort result', array1)

const array2 = [5, 4, 3, 2, 1];
quickSort(array2, 0, array2.length - 1)
console.log('quickSort result', array2)

