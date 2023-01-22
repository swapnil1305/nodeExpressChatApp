const express = require('express');

const router = express.Router();

router.get('/login', (req, res, next) => {
    res.send(
        '<form action="/message" onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" method="POST"><input type="text" name="username" placeholder="username" id="username"><br/><button type="submit">Add User</button></form>');
});

router.post('/message', (req, res, next) => {
    res.redirect('/');
});

module.exports = router;