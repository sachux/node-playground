// Code 1:

function func1(){
    setTimeout(()=>{
      console.log(x);
      console.log(y);
    },3000);
  
    var x = 2;
    let y = 12;
  }
  
  func1();

  //Outputs 2 and 12 . Since, even though let variables are not hoisted, due to async nature of javascript, the complete function code runs before the setTimeout function. Therefore, it has access to both x and y.
  
  // Code 2:
  
  function func2(){
    for(var i = 0; i < 3; i++){
      setTimeout(()=> console.log(i),2000);
  }
  
  }
  
  func2();

  // Outputs 3 , three times since variable declared with var keyword does not have block scope. Also, inside the for loop, the variable i is incremented first and then checked.
  
  
  // Code 3:
  
  
  (function(){
    setTimeout(()=> console.log(1),2000);
    console.log(2);
    setTimeout(()=> console.log(3),0);
    console.log(4);
  })();

// 2
// 4
// 3
// 1 // After two seconds