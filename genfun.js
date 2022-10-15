// // function* number(){
// //     yield 20;
// //     yield 30;
// //     yield 40;
// //     return 50;
// // }
// // let a=number();
// //  console.log(a.next())
// //  console.log(a.next())
// //  console.log(a.next())
// //  console.log(a.next())

// // class Parent{
// //     constructor(x,y){
// //         this.x=x;
// //         this.y=y;
// //     }
// //     getArea=()=>{
// //         return this.x * this.y;
// //     }
// // }
// // class child extends Parent{

// // }

// // const data=new Parent(20,5);
// // console.log(data.getArea());
// // const data2=new child(20,6);
// // console.log(data2.getArea());
// // console.log(data2);

// // //Getter Function
// // let obj={
// //     id:1,
// //     Name:"Sanjay",
// //     get latest(){
// //         console.log("hii sanjay");
// //     },
// //     set latest2(x){
// //         console.log(x);
// //     }
// // }
// // console.log(obj);
// // obj.id;
// // obj.latest;
// // obj.latest2=50;

// // let a='A';
// // let b='A';

// // if(a===b){
// //     console.log(true);
// // }
// // else{
// //     console.log(false);
// // }

// // let arr1=[1,2,3,4];
// // let arr2=[1,2,3,4];
// // if(arr1===arr2){
// //     console.log(true);
// // }
// // else{
// //     console.log(false);
// // }

// //const value=true;

// function even(num){
//     return new Promise((resolve,reject)=>{
//         if(num%2==0){
//             resolve("even number");
//         }
//         else{
//             reject("odd Number");
//         }
//     })
// }

// even(5).then((resolve)=>{
//     console.log(resolve)
// }).catch((error)=>{
//     console.log(error);
// })
// // let val=new Promise((resolve,reject)=>{
// //     if(value){
// //        resolve( console.log("yes"));
// //     }
// //     else{
// //        reject(console.log('No'));
// //     }
// // })
// //   fetch('http://example.com/movies.json')
// //  .then((response)=>response.json())
// //  .then((data)=>console.log(data));

 

// function printVowel(char ,time, anotherChar){
//         // setTimeout(function(){
//         setTimeout(()=>{
//             console.log("Char", char)
//             anotherChar();
//         }, time)
//     }
//     printVowel("A", 5000, ()=>{
//         printVowel("E", 4000, ()=>{
//             printVowel("I", 3000, ()=>{
//                 printVowel("O", 2000, ()=>{
//                     printVowel("U", 1000, () =>{ 
//                         console.log("END")
//                     })
//                 })
//             })
//         })
//     })
    
const promise1 = testPromise(20);
const promise2 = testPromise(21);
const promise3 = testPromise(10);
testPromise(21)
    .then((res)=>{
        console.log("in then");
        console.log(res);
    })
    .catch((err)=>{
        console.log("in catch");
        console.log(err);
    })
    .finally(()=>{
        console.log("Promise done");
    })


// await = always write this when you want the execution flow to stop at a certain line.
// await always will be written in an async function

async function test(){
    const result = await Promise.all([promise1]);
    const result1 = await Promise.allSettled([promise1,promise2,promise3]);
    console.log(result1, result);
}

test()
testPromise(21)
    .then((res)=>{
        console.log("in then");
        console.log(res);
    })
    .catch((err)=>{
        console.log("in catch");
        console.log(err);
    })
    .finally(()=>{
        console.log("Promise done");
    })
