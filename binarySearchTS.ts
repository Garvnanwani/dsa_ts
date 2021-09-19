const array2: Number[] = [-2, -1, 0, 1, 4, 7, 8, 12, 15]
const target: Number = 4


const binarySearch = (arr: Number[], target: Number) => {
    let start = 0
    let end = arr.length - 1

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2)

        if (arr[mid] === target) {
            return mid
        } else if (arr[mid] < target) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }

    return -1
}

console.log(binarySearch(array2, target))
