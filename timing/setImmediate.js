console.log("first");
setTimeout(() => {
    console.log("second");
});
setImmediate(() => {
    console.log("third");
});
console.log("fourth");