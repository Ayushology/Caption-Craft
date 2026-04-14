const ImageKit = require("imagekit");
import { UploadResponse } from './../../node_modules/imagekit/dist/libs/interfaces/UploadResponse.d';

const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

async function uploadfile(file,filename) {
    
}

module.exports = imagekit;