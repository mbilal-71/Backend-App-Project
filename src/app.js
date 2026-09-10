const express = require('express')
const multer = require('multer')
const postModel = require('./models/post.model')

const app = express()
app.use(express.json())

const upload =multer({storage: multer.memoryStorage()})


app.post('/create-post',async (req,res)=>{
    
})

module.exports = app