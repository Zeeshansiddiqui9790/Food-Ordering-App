const express = require('express');
const router = express.Router();
const User=require('../models/User');

router.post("/createuser", async(req, res) => {
    try{
    await  User.create({
        name:req.body.name,
        password:req.body.password,
        email:req.body.email,
        
        location:req.body.location,
        Date:Date.now

      })
      res.json("user created")
    }catch{
      console.log(err);
      res.json("failed to create user")
    }
})

module.exports= router;