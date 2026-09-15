const { ImageKit } = require('@imagekit/nodejs')

const imageKit = new ImageKit({
    privateKey : process.env.IMAGEKIT_PRIVATEKEY
})

async function uploadFile(buffer){
    const result = await imageKit.files.upload({
        file: buffer.toString('base64'),
        fileName: 'image.jpg'
    })
    return result;
}

async function deleteFile(id){
    const result = await imageKit.files.delete(id)
    return result;
}

module.exports= {uploadFile,deleteFile}