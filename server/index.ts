import express from "express";
const app = express();

import { NotionRoute } from "./routes";


console.log('INDEX')
app.use(express.json());

app.use("sendtonotion", NotionRoute);

