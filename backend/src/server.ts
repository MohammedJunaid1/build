import express from "express"
import route from "./Routes/route"
import cors from "cors"
require("dotenv").config()

const app = express()
app.use(express.json())
app.use(cors())

app.use("/v1/api/",route)

const PORT = process.env.PORT ? process.env.PORT : 3000


app.listen(PORT,()=>console.log("Server is listening",PORT))

export default app