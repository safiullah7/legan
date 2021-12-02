import cloudinary from 'cloudinary';
const streamifier = require('streamifier')

const cloudinaryv2 = cloudinary.v2;

cloudinaryv2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})


let streamUpload = (buffer: any) => {
    return new Promise((resolve, reject) => {
        let stream = cloudinaryv2.uploader.upload_stream(
          (error:any, result:any) => {
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
      (error:any, result:any) => {
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

export async function upload(buffer:any) {
    return streamUpload(buffer);
}