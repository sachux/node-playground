const b = {
    name:"Vivek",
    f: function(){
      var self = this;
      console.log(this.name);
      (function(){
        console.log(this.name);
        console.log(self.name);
      })();
    }
  }
  
  b.f();
  
//   "Vivek"
//   undefined
//   "Vivek" 

  const c = {
    name:"Vivek",
    f: function(){
      var self = this;
      console.log(this.name);
      (() =>{
        console.log(this.name);
        console.log(self.name);
      })();
    }
  }
  
  c.f();
  
//  "Vivek"
//  "Vivek"
//  "Vivek"