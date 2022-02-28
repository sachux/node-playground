const app = require("express")();
const {fork} = require("child_process")

app.get("/isprime", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin","*")

    const childProcess = fork("./isPrime.js");
    childProcess.send({"number" : parseInt(req.query.number)});
    childProcess.on("message", response => res.send(response));
} )

app.listen(8080, ()=>console.log("Listening on 8080") )