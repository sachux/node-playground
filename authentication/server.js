const express = require("express")
const jwt = require("jsonwebtoken")
require('dotenv').config()

const app = express();
app.use(express.json())

const posts = [
    {
        "username" : "Sachin",
    },
    {
        "username" : "Diva"
    }
]
app.get("/posts", authenticateToken, (req,res) =>{
    console.log(req.user);
    res.json(posts.filter( (post) => post.username == req.user.name ))
})

app.post("/login", (req,res) => {
    //

    const username = req.body.username;
    const user = { name:username };

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.json(accessToken);

})

function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) return res.sendStatus(403)

        req.user = user;
        next();
    })
    
}

app.listen(3000)