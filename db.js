const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://vikasch2802:Vikas2802@cluster0.gqqbujy.mongodb.net/";

const connectToMongo = async ()=>{
    try{
        mongoose.connect(mongoURI);
    }catch (error){
        console.log(error);
    }
};
module.exports = connectToMongo;