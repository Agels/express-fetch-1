const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
    database:"express-mysql-sequelize",
    host:"localhost",
    username:"root",
    password:"",
    dialect:"mysql"
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('connection success')
    } catch(err){
        console.log('connection error',err)
    }
})();

module.exports = sequelize;
