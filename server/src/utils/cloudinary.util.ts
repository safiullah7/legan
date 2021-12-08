import cloudinary from 'cloudinary';
const streamifier = require('streamifier')
import config from 'config';

const cloudinaryv2 = cloudinary.v2;

cloudinaryv2.config({
  cloud_name: config.get('CLOUDINARY_CLOUD_NAME') as string,
  api_key: config.get('CLOUDINARY_API_KEY') as string,
  api_secret: config.get('CLOUDINARY_API_SECRET') as string
})


let streamUpload = (buffer: any) => {
  return new Promise((resolve, reject) => {
    let stream = cloudinaryv2.uploader.upload_stream(
      (error: any, result: any) => {
        if (result) {
          resolve(result);
        } else {
          reject(error);
        }
      }
    );

    streamifier.createReadStream(buffer).pipe(stream);
  });
};

export const deleteImage = async (id: string) => {
  return new Promise((resolve, reject) => {
    cloudinaryv2.uploader.destroy(id,
      (error: any, result: any) => {
        if (result) {
          console.log("resolved", result);
          resolve(result);
        } else {
          console.log("rejected", result);
          reject(error);
        }
      }
    );
  });
}

export async function upload(buffer: any) {
  return streamUpload(buffer);
}