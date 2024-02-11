import { Router } from "express";
import { getAuthURL, authCallbackURL } from "./Contollers/authController.mjs"
import { downloadAndUploadLargeFile } from "./Contollers/downloadAndUploadController.mjs";
let appRouter = new Router()

appRouter.route("/googleAuth").get(getAuthURL)
appRouter.route("/oauth2callback").get(authCallbackURL)


appRouter.route("/download").get(downloadAndUploadLargeFile)

export default appRouter