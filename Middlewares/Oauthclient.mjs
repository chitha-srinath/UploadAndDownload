import { google } from "googleapis";
import 'dotenv/config'

const oAuth2Client = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.ClIENT_SECRET, process.env.REDIRECT_URI);

export default oAuth2Client