import { FormProp, NotionResponse } from "components/signup";
import { Client } from "@notionhq/client";

export async function sendToNotion(value: FormProp) {

  console.log('value', value)
  //console.log('NOTION', process.env.NOTION_API_KEY )
  const notion = new Client({ auth: 'secret_wrF4FRY1GXVUUGSOq2hdFwctL6S8zoZ76YyhEoGJZWy' });
  console.log(notion)
  if (notion == undefined) {
    return {
      data: "undefined",
      status: false
    }
  }

    try {
      const response = await notion.pages.create({

        "parent": {
          "type": "database_id",
          "database_id": "46e5a310cbd4488b8460b0d10decdf7d"
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
      console.log(response);
    } catch (error) {
      console.log(error)
    }
  }

