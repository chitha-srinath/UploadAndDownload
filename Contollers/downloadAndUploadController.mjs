import { downloadAndUploadFile } from "../Services/downloadAndUploadService.mjs"
import oAuth2Client from "../Middlewares/Oauthclient.mjs";
import { google } from "googleapis";


export async function downloadAndUploadLargeFile(_, res) {
    try {
        const drive = google.drive({ version: 'v3', auth: oAuth2Client });
        let result = await downloadAndUploadFile(drive)
         res.end(result)
    } catch (err) {
         res.end(err)
    }
}

