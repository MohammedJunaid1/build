import express from "express"
require("dotenv").config()

const app = express()
const PORT = process.env.PORT ? process.env.PORT : 3000


app.listen(PORT)