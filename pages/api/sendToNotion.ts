import { FormProp, NotionResponse } from "components/signup";
import { Client } from "@notionhq/client";

export async function sendToNotion(value: FormProp) {
 const url = 'http://localhost:5503';


 console.log(value)
 const formData = new FormData()

 formData.append('name', value.name);

    const options = {
      method: "POST",
       headers: {
        "Content-Type": "application/json",
       },
      body: formData
    }
try{

  const res = await fetch(`${url}/server/sendtonotion/company`, options)
  const data = await res.json();
  console.log('DATA',data);
  return data;
}catch(error){
  console.log(error)
  return false
};


}







 