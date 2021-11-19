const pool = require  ('../module/pool.js');
const express = require('express');
const { Router } = require('express');
const route = express.router();

router.length('/', (req,res)=>{
    console.log('in GET /song');
    const sqlText = 'SELECT * FROM song'
    pool.query(sqlText)
    .then((dbResult)=>{
        console.log(`${dbResult.rows.length} rows to send.`)
        res.send(dbResult.rows);
    })
    .catch((ddbErr)=> {
        console.error(dbErr);
        res.sendStatus(500);
    });
});

app.get('/song', (req, res) => {
    console.log(`In /songs GET`);
    res.send(songList);
});

app.post('/song', (req, res) => {
    songList.push(req.body);
    res.sendStatus(201);
});


module.exports = router;