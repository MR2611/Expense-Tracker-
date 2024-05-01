const mongoose = require('mongoose');
require('dotenv').config();

// const mongoURL = 'mongodb://127.0.0.1:27017/expenseTracker';

const mongoURL = process.env.MONGODB_URL;

mongoose.connect(mongoURL);


const db = mongoose.connection;

db.on('connected',() => {
    console.log("connected to the database");
})

db.on('error',() => {
    console.log('Error occured');
})

db.on('disconnected',() => {
    console.log("mongo db disconnected");
})

module.exports = db;