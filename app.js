const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser =require('body-Parser');
const mongoose = require('mongoose');

const userRoutes = require('./API/routes/user');
const addRoutes = require('./API/routes/add');

mongoose.connect('mongodb+srv://userdata' + process.env.MONGO_ATLAS_PW + '@database.dfff1ao.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.nethod === 'options') {
        res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET');
        return res.status(200)({});
    }
    next();

});

//routes which should handle requests
app.use('/user', userRoutes);
app.use('/add', addRoutes);

app.use((req, res, next) => {
    const error = new Error('data not found');
    error.status = 404;
    next(error);
})
app.use ((error, req , res, next) => {
    res.status(error.status || 600);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;