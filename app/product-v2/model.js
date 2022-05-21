const {DataTypes } = require('sequelize');
const sequelize = require('../../config/sequelize');

const Product = sequelize.define('Product', {
    id : {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }, 
    id_user: {
        type:DataTypes.INTEGER,
        allowNull:false
    },
    name : {
        type:DataTypes.STRING,
        allowNull:false
    },
    price : {
        type:DataTypes.INTEGER,
        allowNull:false
    },
    stock : {
        type:DataTypes.INTEGER,
        allowNull:false
    },
    status : {
        type:DataTypes.BOOLEAN,
        defaultValue:false,
        allowNull:false
    }

})

module.exports = Product;