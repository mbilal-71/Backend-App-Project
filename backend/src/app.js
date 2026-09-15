const express = require('express')
const cors = require('cors')
const multer = require('multer')
const postModel = require('./models/post.model')
const {uploadFile, deleteFile} = require('./services/storage.services')

const app = express()

app.use(cors())
app.use(express.json())

const upload =multer({storage: multer.memoryStorage()})


app.post('/post', upload.single('image'), async (req,res)=>{
    
const result = await uploadFile(req.file.buffer)

const post = await postModel.create({
    image: result.url,
    caption: req.body.caption
})
return res.status(201).json({
    message: 'post created successfully',
    post
})
})

app.get('/posts', async(req,res)=>{
    const posts = await postModel.find()
    return res.status(200).json({
    message: 'post fetched successfully',
    posts
})
})

app.delete('/posts/:id', async(req,res)=>{
    const {id} = req.params
    await deleteFile(id)
    await postModel.findByIdAndDelete(id)
    return res.status(200).json({
        message: 'post deleted successfully'
    })
})

module.exports = app