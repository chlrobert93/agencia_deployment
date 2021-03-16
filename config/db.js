import Sequelize from 'sequelize';
//const Sequelize = require('sequelize');
//require('dontenv'.config({path: 'variables.env'}))
import dotenv from 'dotenv';
dotenv.config({path:"variables.env"});

console.log(process.env.DB_HOST);

//const db = new Sequelize('agenciaviajes','root','Musica',{
const db = new Sequelize(process.env.BD_NOMBRE,process.env.BD_USER,process.env.BD_PASS,{
   // host: '127.0.0.1',
   host:process.env.DB_HOST, 
   //port: '3306',      
   port:process.env.BD_PORT,
    dialect: 'mysql',
    define: {
        timestamps:false
    },
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle: 10000,
    },
    operatorAliases:false,
});

export default  db;