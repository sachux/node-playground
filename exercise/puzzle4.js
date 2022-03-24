let hero = {
    powerLevel: 99,
    getPower(){
      return this.powerLevel;
    }
  }
  
  let getPower = hero.getPower;
  
  let hero2 = {powerLevel:42};
  console.log(getPower());
  console.log(getPower.apply(hero2));

// Output
// undefined
// 42  
// Reason - The first output is undefined since when the function is invoked, it is invoked referencing the global object: