const arr=[1,2,3,4,5,6,7,8,9];

//for Each function
//normal function 
arr.forEach(function(elements){
    console.log(elements);
})
//arrow function
arr.forEach((elements)=>{
    console.log(elements);
})
const arr2=["sanjay","Gudipudi",2000,21,11];
//arrow function
arr2.forEach((value)=>{
    console.log(value);
})
//function method
arr2.forEach(function(elements){
    console.log(elements);
})

//for Of function
const arr3=["apple","bannana",'kiwi','grapes','goa'];
 for(const element of arr3){
    console.log(element);
 }