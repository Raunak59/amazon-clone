// to include the express framework module
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
// to allow the cross origin headers
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// http://localhost:3000/register
app.get('',(req,res) => {
    res.send('hello world');
});
app.post('/register',(req,res) => {
    const obj = req.body.data;
    // connect to mysql
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'amazon_mobiles'
      });
      

    //   connecting database
      connection.connect();

      // insertiung data into mysql table
      var sql = `INSERT INTO users(name,email,mobile_number,password) VALUES('${obj.name}','${obj.email}','${obj.mob}','${obj.password}')`;
      connection.query(sql,(error, results, fields) => {
        // if any errors
        if(error){
            throw error;
            res.json(false);
        }else{
            console.log(results);
            res.json(true);;
        }
        
      })
      


    
})

// to run the server
app.listen(3000,() => {
    console.log('server is running on 3000');
});