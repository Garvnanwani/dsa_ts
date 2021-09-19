// const array1: Number[] = [-2, 0, 10, 4, 3, 1, 5, 7]
// const target2: Number = 5

// const LinearSearch = (arr: Number[], target: Number): Number => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target2) {
//             return i
//         }
//     }

//     return -1
// }

// console.log(LinearSearch(array1, target))


const array3:Number[] =[1,2,2.66,9]
 const linearSearch=(arr:Number[], num:Number): Number=> {
     for (let i = 0; i<arr.length; i++){
         if (arr[i]===num){
           return i;
        }}
 return -1;
}

console.log(linearSearch(array3,2))
