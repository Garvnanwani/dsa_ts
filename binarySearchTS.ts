const array2: Number[] = [-2, -1, 0, 1, 4, 7, 8, 12, 15]
const target: Number = 1


// const binarySearch = (arr: Number[], target: Number) => {
//     let start = 0
//     let end = arr.length - 1

//     while (start <= end) {
//         let mid = Math.floor(start + (end - start) / 2)

//         if (arr[mid] === target) {
//             return mid
//         } else if (arr[mid] < target) {
//             start = mid + 1
//         } else {
//             end = mid - 1
//         }
//     }

//     return -1
// }

// console.log(binarySearch(array2, target))


const binarySearch2=(arr: Number[], target: Number) => {
    let start=0
    let last=arr.length-1

while(start<=last) {
    let mid= Math.floor(start + (last-start)/2)
    if (target===arr[mid]) {
        return mid;

    }
    else if (target<arr[mid]) {
        last=mid-1

    }else  {
        start=mid+1

    }

}return -1
}

console.log(binarySearch2(array2, target))