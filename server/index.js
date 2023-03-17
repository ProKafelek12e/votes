const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express()
app.use(cors())
var konta = [{login:"admin",pass:"admin"}]
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

app.get("/table",function(req,res){
    const sql = "SELECT * FROM glosujacy"
    con.query(sql,function(err,result,fields){
        if(err) console.log(err)
        res.send(result)
        console.log(fields)
    })
})

app.get("/glosy/:imie/:nazwisko",function(req,res){
    const imie = req.params.imie
    const nazwisko = req.params.nazwisko
    const sql = `SELECT * FROM glosujacy WHERE kandydat = '${imie} ${nazwisko}'`
    con.query(sql,function(err,result,fields){
        if(err) console.log(err)
        res.send({pesele:result})
        console.log(fields)
    })
})
app.get("/kandydat/:imie/:nazwisko",(req,res)=>{
    const imie = req.params.imie
    const nazwisko = req.params.nazwisko
    const sql = `INSERT INTO kandydaci(imie,nazwisko) VALUES ('${imie}','${nazwisko}')`
    con.query(sql,function(err,result,fields){
        if(err) console.log(err)
        else res.send("dodane")
    })
})

app.get("/login/:login/:pass",(req,res)=>{
    const login = req.params.login
    const pass = req.params.pass
    for(var i=0;i<=konta.length-1;i++){
        if(login==konta[i].login && pass==konta[i].pass){
            res.send({odp:"ok"})
        }
        else res.send("nie")
    }
})


app.listen(3000)