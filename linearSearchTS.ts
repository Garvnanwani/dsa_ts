const array1: Number[] = [-2, 0, 10, 4, 3, 1, 5, 7]
const target: Number = 5

const LinearSearch = (arr: Number[], target: Number): Number => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i
        }
    }

    return -1
}

console.log(LinearSearch(array1, target))
