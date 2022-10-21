function insertItem(){
   
}

document.querySelector("button").addEventListener("click",()=>{
    
    let title=document.getElementById("item.name.input");
    let price=document.getElementById("item.price-input");
    if(title.value!==""&&price.value!==""){
        let obj={s1No:shoppingCart.length+1,title:title.value,price:price.value}
        shoppingCart.push(obj);
        title.value="";
        price.value="";
        shoppingCart.map(function(e)){
            let tr=document.createElement("tr");
            let td1=document.createElement("td");
            td1.innerText=e.s1No;
            let td2=document.createElement("td");
            td2.innerText=e.title;
            let td3=document.createElement("td");
            td3=innerText=e.price;
            tr.append(td1,td2,td3);
            document.querySelector("table").append(tr);
        }
    }
})
let arr=[1,2,3,4,6,7];



const lunch = () => console.log("It's time for lunch!");

const dinner = () => console.log("It's time for dinner!");

const breakfast = () => {
  console.log("Time to breakfast!");
  setTimeout(lunch, 3000);
  dinner();
};

breakfast();

    setTimeout(() => {
    console.log("A");
    }, 1000);
    
    setTimeout(() => {
    console.log("B");
    }, 2000);
    
    setTimeout(() => {
    console.log("C");
    }, 3000);
    
    setTimeout(() => {
    console.log("D");
    }, 4000);
    
    setTimeout(() => {
    console.log("E");
    }, 5000);
    
    setInterval(()=>{
        console.log("a")
        setInterval(()=>{
            console.log("e")
            setInterval(()=>{
                console.log("i");
            },1000)
        },2000)
    },3000)



    setTimeout(()=>{
        console.log('A');
        setTimeout(() => {
            console.log("E");
            setTimeout(()=>{
                console.log("I");
                setTimeout(()=>{
                    console.log("O")
                    setTimeout(()=>{
                        console.log("U");
                    },1000);
                },2000);
            },3000);
        },4000);
    },5000);


    /************Declartion of an array and adding and removing */


    var cars=[1,2,3,4,5];

    cars.push(6);

    console.log(cars);
    
    var res=cars.push(6);
    console.log(cars);
    res=cars.pop();
    console.log(cars);

    let student={
        name:"Maxwell",
        phone:01917196495,
        email:"Curabitur.egestas.nunc@nonummyac.co.uk",
    }
    console.log(student)

    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("foo");
        }, 300);
      });
      
      myPromise
        .then(handleFulfilledA, handleRejectedA)
        .then(handleFulfilledB, handleRejectedB)
        .then(handleFulfilledC, handleRejectedC);

/********Reverse a String */
    function reverseString(str) {
       console.log( str.split("").reverse().join(""));
    }
    reverseString("hello");


const arr=[1,-1,2,-2,3,-3];

for(let i=0;i<arr.length;i++){
    if(arr[i]<0){
        console.log(arr[i]);
    }
}
arr.sort();
console.log(arr);
 function printVowel(char ,time, anotherChar){
        setTimeout(()=>{
            console.log("Char", char)
            anotherChar();
        }, time)
    }
    
    printVowel("A", 5000, ()=>{
            printVowel("E", 4000, ()=>{
                printVowel("I", 3000, ()=>{
                    printVowel("O", 2000, ()=>{
                        printVowel("U", 1000, () =>{ 
                            console.log("END")
                        })
                    })
                })
            })
        })




/***promises */
const count = true;

let countValue = new Promise(function (resolve, reject) {
    if (count) {
        resolve("There is a count value.");
    } else {
        reject("There is no count value");
    }
});

countValue.then((res)=>{
    console.log(res);
})
let ref=async()=>{

}



function checkCanIVote(time,data) {

    // return the output using return keyword
    // do not console.log it
     return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(data>=18){ 
            // console.log("You can vote");
        resolve("You can vote");
        }else{
            // console.log(data);
            reject('You can not vote')
        }
    },time)
  })
}
checkCanIVote(200, 70). then(data=>{
console. log(data) // prints 'You can vote'
}).catch((err)=>{
console.log(err) // does not do anything
})
checkCanIVote(200, 16). then(data=>{
console. log(data) // does not do anything
}).catch((err)=>{
console.log(err) // prints 'You can not vote'
 })


let res=fetch("https://randomuser.me/api/")
         .then(res=>res.json())
         .then(data=>console.log(data))


let a=2*3**3-1;
console.log( a);



var x=2;
var b="6";
console.log(x+ +b);
function makeCar(name, wheelCount) {
  
    console.log(`Car named ${this.name} is running with ${this.wheelCount}! ` )
     
   }
   
   function makeBike(name, wheelCount) {
     console.log(`Bike named ${name} is running with ${wheelCount}! ` )
   }

   makeBike("pulsar",4);



