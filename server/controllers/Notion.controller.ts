import express from "express"
import { Client } from "@notionhq/client";

const NotionController = {

    sendToNotion: async (req: express.Request, res: express.Response) => {

        console.log('BODY',req.body)

        const secret = 'secret_wrF4FRY1GXVUUGSOq2hdFwctL6S8zoZ76YyhEoGJZWy'
        const databaseId = '46e5a310cbd4488b8460b0d10decdf7d';
        const notion = new Client({ auth: secret });
        console.log(notion)
        if (notion == undefined) {
            res.status(500).send({
                status: false,
                data: null,
                message: "Couldnt conect to notion client"
            })
        }

        try {
            const response = await notion.pages.create({

                "parent": {
                    "type": "database_id",
                    "database_id": databaseId
                },
                "properties": {
                    "Name": {
                        "title": [
                            {
                                "text": {
                                    "content": "NAMETEST"
                                }
                            }
                        ]
                    }
                },
            });


            console.log('RESPONSE', response);
        } catch (error) {
            console.log('ERROR', error)
        }
    }

}

export default NotionController;