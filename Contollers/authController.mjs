import { authrizationURL, callbackURL } from "../Services/authServices.mjs"

export async function getAuthURL(_, res) {
    try {
        let result = await authrizationURL()
         res.redirect(result)
    } catch (err) {
         res.end(err)
    }
}
export async function authCallbackURL(req, res) {
    try {
        const { code } = req.query
        let result = await callbackURL(code)
        console.log(result)
         res.end(result)
    } catch (err) {
         res.end(err)
    }
}