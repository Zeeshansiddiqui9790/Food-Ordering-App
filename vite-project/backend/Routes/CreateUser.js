const express = require('express');
const router = express.Router();
const User=require('../models/User');
const {body,validationResult}=require('express-validator');

router.post("/createuser",
    [
        body('email', 'Invalid email').isEmail(),
        body('name', 'Name must be at least 5 characters long').isLength({ min: 5 }),
        body('password', 'Password must be at least 5 characters long').isLength({ min: 5 })
    ],
    async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            await User.create({
                name: req.body.name,
                password: req.body.password,
                email: req.body.email,
                location: req.body.location,
                Date: Date.now()
            });
            res.json({success:true});
        } catch (err) {
            console.error(err);
            res.status(500).json({success:false});
        }
    }
);


module.exports= router;