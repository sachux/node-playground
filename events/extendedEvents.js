const Logger = require("./external/logger")

const logger = new Logger();

logger.on("messageLogged", (args) =>{
    console.log("Message Logged!", args);
});

logger.log("This message");