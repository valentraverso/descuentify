import { FormProp } from "components/signup";

export async function sendToNotion(value: FormProp){

    console.log('value',value)

    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Notion-Version': '2022-06-28',
          'content-type': 'application/json'
        },
        body: JSON.stringify({page_size: 100})
      };
      
      const res = await fetch('https://api.notion.com/v1/databases/46e5a310cbd4488b8460b0d10decdf7d/query', options)
        try {
            const response = res.json();
            console.log(response);
            return response;
        } catch (error) {
            console.error(error);  
            return false
        }  
    }