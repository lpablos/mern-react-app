const mongoose = require('mongoose')
require('dotenv').config({
    path:'variables.env'
})

const conectarDB = async () =>{
    try {
        await mongoose.connect(process.env.DB_MONGO,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
          
            // useNewUrlParser: true,
            // useCreateIndex: true,
            // useUnifiedTopology: true 
      
        })
        console.log('DB conectada');
    } catch (error) {
        console.log('Error de conección');
        console.log(error);
        process.exit(1)
    }
}

module.exports = conectarDB

