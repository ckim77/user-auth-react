//having a sequelize folder cleans up everything in the index.js

const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
        //this is the uri code from heroku, this would usually go in the dot.env file, but the dude was too lazy to do it this time cuz its an interactive?
    "postgres://ysdzdyhrkcydet:55f36829df36a43cd57a61dec276a0353a505ba42aa20b47cd012c04a1bcfa6d@ec2-54-197-43-39.compute-1.amazonaws.com:5432/d3rg6l8qpdtbui",
    {
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
)

module.exports = sequelize