import express from "express";
import { NotionController } from "../controllers"
const router = express.Router();

const { sendToNotion } = NotionController
console.log('ROUTER')
const NotionRoute = router
    .post('/company', sendToNotion)
    ;

    export { NotionRoute };