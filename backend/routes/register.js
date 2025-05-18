// backend/routes/register.js
const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

const userDataPath = path.join(__dirname, "../data/user.json");

router.post("/", (req, res) => {
  const { fname, lname, email, password, category, occupation } = req.body;

  // โหลดข้อมูลเดิมจาก user.json
  let users = [];
  if (fs.existsSync(userDataPath)) {
    const fileContent = fs.readFileSync(userDataPath);
    users = JSON.parse(fileContent);
  }

  // ตรวจสอบว่า email ซ้ำไหม
  const isEmailUsed = users.some(user => user.email === email);
  if (isEmailUsed) {
    return res.status(400).send("This email has already been used.");
  }

  // เพิ่มผู้ใช้ใหม่เข้าไป
  users.push({ fname, lname, email, password, category, occupation });

  // เขียนกลับลงไฟล์
  fs.writeFileSync(userDataPath, JSON.stringify(users, null, 2));

  res.send("Register successfully");
});

module.exports = router;
