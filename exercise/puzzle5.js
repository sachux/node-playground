// Code 2
  
const a = function(){
    console.log(this);
  
    const b = {
      func1: function(){
        console.log(this);
      }  
    }
  
    const c = {
      func2: ()=>{
        console.log(this);
      }
    }
  
    b.func1();
    c.func2();
  }
  
  a();

// Outputs in the following order:

// global/window object
// object "b"
// global/window object

// Since we are using arrow function inside func2, this keyword refers to the global object.