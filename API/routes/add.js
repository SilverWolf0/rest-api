const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// handle incoming information requst to /address
router.get('/', (req, res, next) => {
    res.status(200).json ({
        message: 'Negeri Sembilan, Malaysia'
    });
});

router.post('/', (req, res, next) => {
    const user = new user({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        age: req.body.age,
        address: req.body.address,
        poscode: req.body.poscode
    });
    user
    .save()
    .then(result => {
        console.log(result);
    })
    .catch(err => console.log(err));
    res.status(201).json ({
        message: 'your address',
        createdAdd: add
    });
});

router.get('/:addid', (req, res, next) => {
    res.status(202).json ({
        message: 'Pahang, Malaysia',
        addid: req.params.addid
    });
});

router.patch('/:addid', (req, res, next) => {
    res.status(203).json ({
        message: 'Update Address',
        addid: req.params.addid
    });
});

router.delete('/:addid', (req, res, next) => {
    res.status(204).json ({
        message: 'Delete Address',
        addid: req.params.addid
    });
});

module.exports = router;