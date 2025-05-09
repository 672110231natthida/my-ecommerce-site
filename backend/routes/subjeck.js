const express = require('express');
const router = express.Router();
const subjeck = require('../data/contact_subject.json');


router.get = ('/', (req, res) => {
    //res.end('{"contactSubject":["Software Developer","System Administrator","Data Analyst","Cybersecurity Specialist","Cloud Engineer","UX/UI Designer","Other"]}')
    res.json(subjeck);
});

module.express = router;