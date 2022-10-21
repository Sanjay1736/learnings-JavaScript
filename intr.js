// //const value=false;
// // let val= new Promise((resolve,reject)=>{
// //     if(value){
// //         resolve(console.log("yes"));
// //     }
// //     else{
// //         reject(console.log("No"));
// //     }
// // })

function* valuee(){
    // for(let i=1;i<=10;i++){
    //     yield i;
    // }
    yield 1;
    yield 2;
    return 3;
}

const gen=valuee();
console.log(valuee.next().value);
//console.log(valuee.next);

// const arr=[1,2,3,4];
// const arr2=[...arr];

// function value(...arr){

// }
// function greet(person) {

//     if(person == {name : 'Newton' }){
    
//     console.log('hey newton');
    
//     }else{
    
//     console.log('hey there');
    
//     }
    
//     }
    
//     greet({name : 'Newton' });


//     const a = {"b": "hey"};

//     const d = {"b": "hey"};
    
//     console.log(a == d);
 
//     const val1={
//         id:21,
//         Name:"Sanjay",
//     }
//     const val2={
//         id:21,
//         Name:"Sanjay",
//     }

    
    
//     function test(){
//      let x = y = 0;
//      x++; y++; 
//      return x;
//    }
//    console.log(test(), typeof x, typeof y);

//    let y = 1;
//    if(function g(){}) {
//        y += typeof g;
//      }
//     console.log(y);


   
   