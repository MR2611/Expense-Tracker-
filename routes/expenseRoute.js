const express = require('express');
const router = express.Router();
const path = require('path');
const expense = require('./../models/expenseModel');

// Define the route to serve the expense.html file
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'Html File', 'expense.html'));
});

// Handle the POST request to add a new expense
router.post('/', async (req, res) => {
    const data = req.body;

    const newData = new expense(data);
    const saveData = newData.save();
    
    console.log('data saved');
    res.status(200).json(newData);
});

module.exports = router;
