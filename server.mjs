
import appRouter from "./routes.mjs";
import express from "express";

import 'dotenv/config'

const app = express()


app.get("/", (_, res) => {
    res.end("server is on")
})
app.use(appRouter)
app.listen(process.env.PORT, () => {
    console.log("connect to port", process.env.PORT)
});