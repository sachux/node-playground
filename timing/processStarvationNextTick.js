let count = 0

const cb = () => {
    console.log(`Processing nextTick cb ${++count}`)
    process.nextTick(cb)
}

setImmediate(() => console.log('setImmediate is called'))
setTimeout(() => console.log('setTimeout executed'), 100)

process.nextTick(cb)

console.log('Start')