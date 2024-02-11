import oAuth2Client from "../Middlewares/Oauthclient.mjs";
import 'dotenv/config'


export async function authrizationURL() {
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: process.env.SCOPES.split(" "),
        include_granted_scopes: true
    });
    console.log(authUrl)
    return authUrl

}

export async function callbackURL(code) {

    const { tokens } = await oAuth2Client.getToken(code);

    oAuth2Client.setCredentials(tokens);

    return "authentication sucessfull"

}