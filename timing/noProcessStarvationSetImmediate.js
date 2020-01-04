let count = 0

const cb = () => {
    console.log(`Processing setImmediate cb ${++count}`)
    setImmediate(cb)
}

setImmediate(cb)
setTimeout(() => console.log('setTimeout executed'), 100)

console.log('Start')