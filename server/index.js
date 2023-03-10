const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express()
app.use(cors())

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"votes"
})

con.connect(function(err){
    if(err) console.log(err)
    console.log("connected to database")
})
app.get("/kandydaci",function(req,res){
    const sql = "SELECT * FROM kandydaci"
    con.query(sql,function(err,result,fields){
        if(err) console.log(err)
        res.send(result)
        console.log(fields)
    })
})
app.get("/vote/:imie/:nazwisko/:PESEL",function(req,res){
    const nazwisko= req.params.nazwisko
    const imie = req.params.imie
    const pesel = req.params.PESEL
    const sql = `INSERT INTO glosujacy (pesel, kandydat) VALUES ('${pesel}','${imie} ${nazwisko}')`
    con.query(sql,function(err,result,fields){
        if(err) console.log(err)
        res.send("dodano")
        console.log(fields)
    })
})

app.listen(3000)