const getMilk = () => {
    return new Promise( (resolve, reject) => {
        resolve("Milk Added");
    });
}

const addCoffee = async () => {
    return new Promise( (resolve, reject) => {
       setTimeout( () => resolve("Added Instant Coffee mix"), 2000);
    });
}

const addSugar = async () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => resolve("Added Sugar"), 2000);
    });
}

const makeCoffee = async () => {
    console.time("Coffee Time");

    console.log('Making coffee');
    const step1 = await getMilk();
    console.log(step1);
    const step2 = await addCoffee();
    console.log(step2);
    const step3 = await addSugar();
    console.log(step3);

    console.log("That's it, your coffee is ready!")
    console.timeEnd("Coffee Time");

}

const addSugarAndCOffee = () => {
    return Promise.all([addCoffee(),addSugar()]);
}

const makeCoffeeFast = async () => {
    console.time("Coffee Time");
    console.log('Making coffee');
    const step1 = await getMilk();
    console.log(step1);
    const values = await addSugarAndCOffee();
    console.log(values[0]);
    console.log(values[1]);
    console.log("That's it, your coffee is ready!")
    console.timeEnd("Coffee Time");
}

//makeCoffee();
makeCoffeeFast();
