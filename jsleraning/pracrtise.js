function* numbers(n){
    while(n>0){
       yield(n++);
    }
}
const natural=numbers(1);
console.log(natural.next().value);
console.log(natural.next().value)
console.log(natural.next().value)
console.log(natural.next().value)
console.log(natural.next().value)
console.log(natural.next().value)
let num=numbers(1);
for(let i=0;i<10;i++){
    console.log(num.next().value);
}

function sumOfThreeElements(...elements){
    return new Promise((resolve,reject)=>{
    if(elements.length < 3 ){
     reject("Only three elements or less are allowed");
   }
   else{
     let sum = 0;
     let i = 0;
     while(i < elements.length){
       sum += elements[i];
       i++;
     }
     resolve("Sum has been calculated: "+sum);
   }
 })
}

sumOfThreeElements(1,2,3)
    .then(result=>console.log(result))
    .catch(error=>console.log(error));

sumOfThreeElements(1,5,7,8)
.then(res=>console.log(res))
.catch(err=>console.log(err));

const obj1={
    id:121,
    Name:"sanjay",
    Age:21,
}

const obj2={
    id:121,
    Name:"sanjay",
    Age:21,
}

if(obj1===obj2){
    console.log("true");
}
else{
    console.log("false")
}


var eq = JSON.stringify(obj1) === JSON.stringify(obj2);
console.log(eq);

function sayHi() {
  console.log(name);
  console.log(age);
  var name = 'Ayush';
  let age = 21;
}

sayHi();