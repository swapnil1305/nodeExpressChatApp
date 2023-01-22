const express = require("express");

const fs = require("fs");

const router = express.Router();

router.get("/",(req, res, next) => {
    fs.readFile('chat.txt', (err, data) => {
        if(err){
            console.log(err)
            data = 'No Chats Found';
        }
        res.send(
            `<div>${data}</div>
            <form action="/" onsubmit="document.getElementById('username').value = localStorage.getItem('username')" method="POST">
            <input type="text" name="message" id="message" placeHolder="message">
            <input type="hidden" name="username" id="username"><br>
            <button type="submit">Send</button>
            </form>`
        );
    }); 
});

router.post("/", (req, res, next) => {
    console.log(`{${req.body.username}:${req.body.message}}`)
    fs.appendFile("chat.txt", ` ${req.body.username}:${req.body.message} `, (err) =>
    err ? console.log(err): res.redirect("/")
     );
});

module.exports = router;
