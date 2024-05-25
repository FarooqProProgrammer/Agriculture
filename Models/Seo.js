const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');



const SeoModel = sequelize.define(
    'Seo',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        MetaTitle :{
            type: DataTypes.STRING,
            allowNull: false,
        },
        MetaDescription: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        CanonicalTag: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        uniqueId: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }
);

module.exports = SeoModel