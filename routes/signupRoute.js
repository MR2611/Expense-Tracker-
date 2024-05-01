const express = require('express');
const router = express.Router();
const path = require('path');
const signup = require('./../models/signupModel');

// router.use(express.static(path.join(__dirname, '..', 'Html File')));

router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'..', 'Html File', 'Signup.html'   ));
})

router.post('/', async(req,res) => {
    try{
        const data = req.body;

        const newuser = new signup(data);

        const savedUser = await newuser.save()
        console.log('data saved');
        // alert("Sign Up Successfull");
        res.status(200).json(savedUser);
    }
    catch(error){
        console.log(error);
        res.status(500).json('Internal Server Error');
    }
})

// router.put('/:id', async (req,res) => {
//     try{
//         const personId = req.params.id;
//         const updatePerson = req.body;

//         const response = await signup.findByIdAndUpdate(personId,updatePerson, {
//             new : true,
//             runValidators : true,
//         })

//         if(!response){
//             return res.status(404).json({error:'Person not found'});
//         }

//         console.log('updated');
//         res.status(200).json(response);
//     }catch(error){
//         console.log(error);
//         res.status(500).json('Internal Server Error');
//     }
// })

module.exports = router;