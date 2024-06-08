// 1. Write a js program to read and print elements of array.
// var array = [1, 2, 3, 4, 5];
// function printArrayElements(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
// printArrayElements(array);

// 2. Write a js program to print all negative elements in an array.
// var array = [1, -2, 3, -4, 5, -6, 7, -8, 9, 0];
// function printNegativeElements(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             console.log(arr[i]);
//         }
//     }
// }
// printNegativeElements(array);

// 3. Write a js program to find sum of all array elements.
// var array=[1,2,3,4,5];
// var sum=0;
// function sumArray(arr){
//     for(i=0;i<arr.length;i++){
//   sum=sum+arr[i];
//     }
//     console.log(`Sum of Array :${sum}`);
// }
// sumArray(array);

// 4. Write a js program to find maximum and minimum element in an array.
// var array=[1,2,3,4,5];
// maxNum=array[0];
// minNum=array[0];
// function maximum(arr){
//     for(i=0;i<arr.length;i++){
//         if(arr[i]>maxNum){
//             maxNum=arr[i];
//         }
//     }
//     console.log(`Maximum number:${maxNum}`);
// }
// function minimum(arr){
//     for(i=0;i<arr.length;i++){
//         if(arr[i]<minNum){
//             minNum=arr[i];
//         }
//     }
//     console.log(`Minimum number:${minNum}`);
// }
// maximum(array);
// minimum(Array);

// 5. Write a js program to find second largest element in an array.
// var array=[1,2,3,4,5];
// var largest=array[0];
// var secondLargest=-Infinity;
// function findSecondLargest(arr){
//     for(i=0;i<arr.length;i++){
//         if(arr[i]>largest){
//             secondLargest=largest;
//             largest=arr[i];

//         }else if(arr[i]<largest&&arr[i]>secondLargest){
//             secondLargest=arr[i];
//         }
//     }
//     return secondLargest;
// }
// var seclargeNum=findSecondLargest(array);
// console.log(`Second Largest Num:${seclargeNum}`);

// 6. Write a js program to count total number of even and odd elements in an array.
// var array = [1, 2, 3, 4, 5];
// var even = 0;
// var odd = 0;
// function findEvenOdd(arr) {
//     for (i = 0; i < arr.length;i++) {
//         if (arr[i] % 2 == 0) {
//             even = even + 1;
//         } else {
//             odd = odd + 1;
//         }
//     }
//     console.log(`Even elements:${even}`);
//     console.log(`Odd elements :${odd}`);
// }
// findEvenOdd(array);

// 7. Write a js program to count total number of negative elements in an array.
// var array = [1, -2, 3, -4, 5, -6, 7, -8, 9, 0];
// var total=0;
// function totalNegativeElements(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             total=total+1;
//         }
//     }
//     console.log(`Total num negative elements:${total}`);
// }
// totalNegativeElements(array);

// 8. Write a js program to copy all elements from an array to another array.
// var array1 = [1, 3, 5, 7];
// var array2 = [];
// console.log(`befor copy`);
// console.log(array1);
// console.log(array2);
// console.log(`after copy`);
// function copyArray(arr1, arr2) {
//     for (i = 0; i < arr1.length; i++) {
//        arr2[i]=arr1[i];
//     }
//     return arr2;
// }
// var array2=copyArray(array1,array2);
// // for(i=0;i<array1.length;i++){
// //     console.log(`First Array:${array1[i]}`);
// //     console.log(`Second Array:${array2[i]}`);
// // }
// console.log(array1);
// console.log(array2);

// 9. Write a js program to insert an element in an array.

