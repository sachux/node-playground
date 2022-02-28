const EventEmitter = require('events');

class Logger extends EventEmitter{
    log(message){
        console.log(message);

        this.emit("messageLogged", {"type" : 1, "message" : message})
    }
}

module.exports = Logger;