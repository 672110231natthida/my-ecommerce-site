// 📁 backend/routes/login.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.post('/', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and Password are required.' });
  }

  const userFilePath = path.join(__dirname, '../data/user.json');
  fs.readFile(userFilePath, 'utf-8', (err, data) => {
    if (err) return res.status(500).json({ message: 'Server Error' });

    const users = JSON.parse(data);
    const user = users.find(u => u.email === username);

    if (!user) {
      return res.json({ message: 'Incorrected Username' });
    }

    if (user.password !== password) {
      return res.json({ message: 'Incorrected Password.' });
    }

    return res.json({ message: 'Login successfully.' });
  });
});

module.exports = router;