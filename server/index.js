const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express()
app.use(cors())
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:""
})

con.connect({function(err){
    if(err) console.log(err)
    console.log("connected to database")
}})
app.get("/",function(req,res){

})
app.get("/",function(req,res){

})

app.listen(3000)