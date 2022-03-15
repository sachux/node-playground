console.log("first");
setTimeout(() => {
    console.log("second");
});
setImmediate(() => {
    console.log("third");
});
console.log("fourth");

setImmediate(() => console.log('I run immediately'))

process.nextTick(() => console.log('But I run before that'))

// Output:
// first
// fourth
// But I run before that
// second
// third
// I run immediately

// A nice blog on this topic :
//https://jinoantony.com/blog/setimmediate-vs-process-nexttick-in-nodejs