import { FormProp, NotionResponse } from "components/signup";
import { Client } from "@notionhq/client";

export async function sendToNotion(value: FormProp) {
 const url = 'https://zzezequiel-special-potato-57j6p44rrg5cpv56-3000.preview.app.github.dev';


 console.log(value)
 const formData = new FormData()

 formData.append('name', value.name);

    const options = {
      method: "POST",
      body: formData
    }

    const res = await fetch(`${url}/sendtonotion/company`, options)
    const data = await res.json();
    console.log('DATA',data);
    return data;

}







 