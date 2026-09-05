const mongoose = require('mongoose')

async function connectDB(){
await mongoose.connect('mongodb+srv://backend-app:jtXts4Ib7oC5p5tX@cluster0.rqoiynf.mongodb.net/App-Project')
 console.log('Connected to DB')
}

module.exports = connectDB