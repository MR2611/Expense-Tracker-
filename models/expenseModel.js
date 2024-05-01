const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    amount: {
        type: String,
        required: true
    },

    select: {
        type : String,
    },

    date: {
        type: String
    },

    isPremium : {
        type: Boolean,
        default: false
    }
})

const expense = mongoose.model('expense',expenseSchema);

module.exports = expense;