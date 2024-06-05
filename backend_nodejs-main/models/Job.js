const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../db');

const Job = sequelize.define('Job', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    salary: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    employment: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Job;
