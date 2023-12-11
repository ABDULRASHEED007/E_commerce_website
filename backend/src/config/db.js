const mongoose = require("mongoose")

const MONGOURL = "mongodb+srv://mdabdulrasheed007:NDUk2aLMCtngHPIN@cluster0.kotiu6g.mongodb.net/?retryWrites=true&w=majority"

const connectDB = () => {
    return mongoose.connect(MONGOURL).then(()=> {
        console.log('MongoDB Connected...')
    });
}

module.exports = {connectDB}