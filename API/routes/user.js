const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('../models/product');

// handle incoming information requst to /user
router.get("/", (req, res, next) => {
    res.status(200).json ({
        message: 'handling GET request to /users'
    });
});

router.post("/", (req, res, next) => {
    const user = new user({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        age: req.body.age
    });
    user
    .save()
    .then(result => {
        console.log(result);
    })
    .catch(err => console.log(err));
    res.status(201).json ({
        message: 'handling POST request to /users',
        createdUser: user
    });
});

router.get("/:userId", (req, res, next) => {
    const id = req.params.userid;
    User.findById(id).exec().then(doc =>{
        console.log("from database",doc);
        res.status(202).json(doc);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({error: err})
    })
  
});
router.patch("/:userId", (req, res, next) => {
    res.status(203).json ({
        message: 'Updated users!'
    });
});

router.delete("/:userId", (req, res, next) => {
    res.status(204).json ({
        message: 'Deleted users!'
    });
});

module.exports = router;