const express = require('express');
const router = express.Route();

router.post('/',(req, res) => {
    const {fname, lname,email,subject,message} = req.body
    console.log('Content from submited',{fname, lname, email, subject, message});
    res.status(200).json({status:"Massage Recived"});
});

module.express = router;