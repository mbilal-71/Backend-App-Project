const express = require('express')
const multer = require('multer')
const postModel = require('./models/post.model')
const uploadFile = require('./services/storage.services')

const app = express()
app.use(express.json())

const upload =multer({storage: multer.memoryStorage()})


app.post('/create-post', upload.single('image'), async (req,res)=>{
    
console.log(req.body)
console.log(req.file)
const result = await uploadFile(req.file.buffer)
console.log(result)
})

module.exports = app