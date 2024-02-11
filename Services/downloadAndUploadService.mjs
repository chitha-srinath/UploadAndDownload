
import fs from "fs"
import 'dotenv/config'

export async function downloadAndUploadFile(drive) {
    try {
        const dest = fs.createWriteStream("./Media/driveVideo.mp4");

        const result = await drive.files.get(
            { fileId: process.env.SOURCE_FILE_ID, alt: 'media' },
            { responseType: 'stream' }
        );
        result.data
            .on('end', async () => {
                console.log('Large File Downloaded');
                await uploadVideo(drive)
            })
            .on('error', (err) => {
                console.error('Error downloading the file:', err);
            })
            .pipe(dest)
            .on('finish', () => {
                return "Large File Uploaded"
            })
    } catch (err) {
        return err
    }
}

async function uploadVideo(drive) {

    const uploadStream = fs.createReadStream("./Media/driveVideo.mp4");
    const media = {
        mimeType: 'video/mp4',
        body: uploadStream,
    };
    const requestBody = {
        name: `uploadDriveFile.mp4`,
        parents: [process.env.DESTINATION_FOLDER_ID],
        fields: 'id',
    };
    await drive.files.create({
        requestBody,
        media
    });

    console.log("uploaded large video")

    return
}
