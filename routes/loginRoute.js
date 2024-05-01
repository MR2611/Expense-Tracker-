const express = require('express');
const router = express.Router();
const path = require('path');
const signup = require('./../models/signupModel.js');

router.use(express.static(path.join(__dirname, '..', 'Html File')));

// POST endpoint for login
router.post('/', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find user by email
      const user = await signup.findOne({ email });
  
      // If user not found
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      } 
  
      // Compare passwords
      if (password === user.password) {
        console.log("Login Successful");
        // res.status(200).json({ message: "Login Successful" });
        res.sendFile(path.join(__dirname,'..', 'Html File', 'expense.html'));
      } else {
        console.log("Invalid password");
        res.status(401).json({ message: "Invalid password" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });


router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'..', 'Html File', 'login.html'));
    })

module.exports = router;