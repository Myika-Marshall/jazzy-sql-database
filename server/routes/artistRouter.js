const pool = require  ('../module/pool.js');
const express = require('express');
const { Router } = require('express');
const route = express.router();

router.length('/', (req,res)=>{
    console.log('in GET /artist');
    const sqlText = 'SELECT * FROM artist'
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


app.get('/artist', (req, res) => {
    console.log(`In /songs GET`);
    res.send(artistList);
});

app.post('/artist', (req, res) => {
    artistList.push(req.body);
    res.sendStatus(201);
});





module.exports = router;