import express from "express";
import NotionController from "server/controllers/Notion.controller";
const router = express.Router();

const { sendToNotion } = NotionController
console.log('ROUTER')
const NotionRoute = router
    .post('/company', sendToNotion)
    ;

    export { NotionRoute };