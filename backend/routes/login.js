// backend/routes/login.js
const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

const userDataPath = path.join(__dirname, "../data/user.json");

router.post("/", (req, res) => {
    const { email, password } = req.body;

    if (!fs.existsSync(userDataPath)) {
        return res.status(404).send("No users found.");
    }

    const fileContent = fs.readFileSync(userDataPath);
    const users = JSON.parse(fileContent);

    const user = users.find(u => u.email === email);
    if (!user) return res.status(401).send("Incorrected Username");
    if (user.password !== password) return res.status(401).send("Incorrected Password.");

    res.send("Login successfully");
});

module.exports = router;
