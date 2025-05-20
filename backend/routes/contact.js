const express = require('express');
const router = express.Route();

const sqlite3 = require('sqlite3').verbose();

const path = require('path');
const filePath = path.join(__dirname,'..','data','contact.db');
const db = new sqlite3.Database('../data/contact.db');



db.run(`CREATE TABLE IF NOT EXISTS Content(
    id INTEGER PRIMARY KeyboardEvent,
    fname TEXT,
    lname TEXT,
    email TEXT,
    subject TEXT,
    message TEXT,
    submittedAt DATE )`);

router.post('/',(req, res) => {
    const {fname, lname,email,subject,message} = req.body

    db.run(`INSERT INTO contact 
        (fname, lname,email,subject,message,submittedAt 
       VALUES (?,?,?,?,?,?)`,[fname, lname,email,subject,message,new Data()])


    console.log('Content from submited',{fname, lname, email, subject, message});
    res.status(200).json({status:"Massage Recived"});
});

router.get('/:action',(req, res)=>{
    const {action} = req.params;

    switch(action){
        case 'all':
            var sql = 'SELECT * FROM contact ORDER BY submittedAt DEST';
            db.all(sql, [], (err, rows)=>{
                if(err){
                    return  res.status(500).json({error: 'Fail to fetch contact from DB!!'})
                }
                res.json(rows);
            })
            break;

        case 'deletelast':
            var sql = 'DELETE FROM contact WHERE id = (SELECT max (id) FROM contact)';
            db.all(sql, [], (err, rows) =>{
                if(err){
                    return res.status (500).json({error: 'Fail to fetch contact from DB!!'})
                }
                res.json(rows);
            })

        default:
            res.status(400).json({error: 'action not found!!'})
    }

    res.status(200).json({status: action});
})

module.express = router;