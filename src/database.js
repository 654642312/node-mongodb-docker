const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo/mongodatabase')
    .then(db => console.log('db is connect to', db.connection.host))
    .catch(err => console.log(err));