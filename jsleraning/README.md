# what is Hosting in javaScript?
JavaScript Hosting refrers to the process of whereby the interpreter appears to move the declaration  of function, variables function to the top of their scope for execution.



# What  Is function Curring?

It is an Advance technique in functional programming where  tranforms Multiple functinoal Arguments into Single  Single Arguments in Sequence

function add (a, b) {
  return a + b;
}

add(3, 4); // returns 7


function add (a) {
  return function (b) {
    return a + b;
  }
}


add(3)(4);

var add3 = add(3);

add3(4);


# what is  Function Generator?


  <script type="application/javascript">
    var title = "{{.Title}}"
    console.log(title)
  </script>


# promises in javaScript?
 

 Before Promises we use callBack for Asynchronous operations, Due to limited Function of callbacks, Using multiple callback function its leads to un-managible code to overcome this promises were introduced in promises there are 2 functions as a arguments in like resolve and reject.

eg:-
      function sumOfThreeElements(...elements){
     return new Promise((resolve,reject)=>{
     if(elements.length > 3 ){
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




 







