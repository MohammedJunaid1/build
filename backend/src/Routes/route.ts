import { Router } from "express";
import groqRoute from './groqRoute/groqRoute'
import route from "./groqRoute/groqRoute";

route.use("/chat",groqRoute)

export default route