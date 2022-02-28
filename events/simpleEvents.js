const EventEmitter = require('events');
const myEvent = new EventEmitter();

myEvent.on('create', () => {
    console.log("Event raised");
});

myEvent.emit('create');