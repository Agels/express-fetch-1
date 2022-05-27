const mongoose = require('mongoose');

// mongoose.connect('mongodb://admin:admin@localhost:27017/expressMongo?authSource=admin');
mongoose.connect('mongodb+srv://adminadmin:adminadmin123@cluster0.fo6zk.mongodb.net/expressMongo?retryWrites=true&w=majority',{ useNewUrlParser: true})

const db = mongoose.connection;

db.on('error',console.error.bind(console));
db.once('open',()=> console.log('connection success'))
