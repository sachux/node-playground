let promise = new Promise((resolve, reject) => {
    if(false){
        resolve("hello there");
    }else{
        reject("bye brother");
    }
});


promise.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})

const sayHi = async (name) => {
    let out;
    await setTimeout(() => {
        out = `Hi ${name}`;
    }, 2000);

    return out;
}

sayHi("Neo").then((res) => {
    console.log(res);
})