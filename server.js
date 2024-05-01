const express = require('express');
const path = require('path');
const app = express();
const db = require('./Database/db');
const signup = require('./models/signupModel');
const login = require('./models/loginModel')
const expense = require('./models/expenseModel');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

// app.get('/home', (req,res) => {
//     res.sendFile(path.join(__dirname,'expense.html'));
// })
//Hii


const signupRoute = require('./routes/signupRoute');
app.use('/SignUp',signupRoute); 

const loginRoute = require('./routes/loginRoute');
app.use('/Login' , loginRoute);

const expenseRoute = require('./routes/expenseRoute');
app.use('/expense', expenseRoute);
// app.get('/Login', (req,res) => {
//     res.sendFile(path.join(__dirname,'Login.html'));
// })

// app.get('/Forget-Password', (req,res) => {
//     res.sendFile(path.join(__dirname,'forgetPassword.html'));
// })

// app.post('/SignUp',(req,res) => {
//     res.send("Successfull");
// })

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});