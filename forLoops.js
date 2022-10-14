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
  const arr4=['bikes','cars','jeeps','rikshaws','lorries'];
  for(const vehicle of arr4){
    console.log(vehicle.split(","));
  }







  /***for IN Loops */

const  arr5=["sanjay","Gudipudi",2000,21,11];
// for In loop for arrays
for(const data in arr5){
     console.log(data);
}

/**if we need to access value using for In loops we use the below method */
for(const data in arr5){
    const value=arr5[data];
    console.log(value)
}
//for In loop for objects
const obj1={
    Name:'Sanjay',
    Surname:'Gudipudi',
    Age:21,
    DOB:2000,
    Month:11,
}

for(const data in obj1){
    console.log(data);
}

