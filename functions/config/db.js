const functions = require('firebase-functions');
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    //const conn = await mongoose.connect(functions.config().mongo.uri);
    const conn = await mongoose.connect('mongodb+srv://ellasyoung:Nps1300845!@crochetcompassv1.4wmpnex.mongodb.net/crochetpatterns?retryWrites=true&w=majority');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;