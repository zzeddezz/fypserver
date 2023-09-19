const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const fs = require("fs");
const path = require("path");
const uuid = require("uuid").v4;
const sharp = require("sharp"); // For image processing

exports.s3Upload = async (files) => {
  const s3client = new S3Client();

  const params = files.map(async (file) => {
    const fileExtension = path.extname(file.name);
    const keyPrefix = `products/${uuid()}`;
    const originalKey = `${keyPrefix}_original${fileExtension}`;
    const pixelatedKey = `${keyPrefix}_pixelated${fileExtension}`;

    // Upload the original image
    await s3client.send(new PutObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: originalKey,
      Body: fs.createReadStream(file.path),
      FileName: file.name,
    }));

    // Generate and upload the pixelated image
    const pixelatedBuffer = await generatePixelatedImage(file.path);
    await s3client.send(new PutObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: pixelatedKey,
      Body: pixelatedBuffer,
      FileName: file.name,
    }));

    return [
      {
        Key: originalKey,
        FileName: file.name,
        Link: `${process.env.AWS_LINK}/${originalKey}`,
      },
      {
        Key: pixelatedKey,
        FileName: file.name,
        Link: `${process.env.AWS_LINK}/${pixelatedKey}`,
      },
    ];
  });

  const results = await Promise.all(params);

  // Flatten the array of arrays
  return results.flat();
};

async function generatePixelatedImage(inputPath) {
  /**
   * add this between resize and toBuffer to further reduce quality and size
   * .jpeg({ quality: 80 })
   */
  const imageBuffer = await sharp(inputPath)
    .resize(50, 50, { fit: "inside" }) // Adjust pixelation level here
    .toBuffer();
  return imageBuffer;
}
