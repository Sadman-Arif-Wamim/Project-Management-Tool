const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Users = require('../models/userModel');

exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await Users.findOne({ username }).select('+password');
        if (!user) return res.status(404).json({ msg: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

        const payload = { id: user.id, username: user.username };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token })

    } catch (error) {
        res.status(500).json({ msg: 'Server error' })
    }
};

exports.register = async (req, res) => {
    const { username, email, password } = req.body;
    
    try {
      let user = await Users.findOne({ email });
      if (user) return res.status(400).json({ msg: 'User already exists' });
  
      user = new Users({ username, email, password });  
  
      await user.save();  
  
      res.status(201).json({ msg: 'User registered successfully' });
    } catch (error) {
      console.error("Registration Error:", error);
      res.status(500).send("Server Error");
    }
  };