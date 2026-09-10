const { ImageKit } = require('@imagekit/nodejs')

const imageKit = new ImageKit({
    privateKey : 'private_VDmPWhhVd42Rwj19XY2MW9rlzPc='
})

async function uploadFile(buffer){
    const result = await imageKit.files.upload({
        file: buffer.toString('base64'),
        fileName: 'image.jpg'
    })
    return result;
}

module.exports= uploadFile