import { FormProp, NotionResponse } from "components/signup";
import { getAccessToken } from '@auth0/nextjs-auth0';
import { IncomingMessage } from 'http';
import { NextApiRequest, NextApiResponse } from 'next';


export async function sendToNotion(value: FormProp) {
  const url = process.env.NEXT_PUBLIC_API_URL;
  console.log(value)
  // const fetchToken = await fetch(`http://localhost:3000/pages/api/auth/getToken`);
  // const token = await fetchToken.json();


  const token = await fetch(`http://localhost:3000/api/auth/getToken`)
  const formData = new FormData()
  formData.append('name', value.name);
  formData.append('lastname', value.lastname);
  formData.append('company', value.companyName);
  formData.append('email', value.email);
  formData.append('phoneNumber', value.phoneNumber);

  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`
    },
    body: formData
  }
  try {

    const res = await fetch(`${url}/contact/company`, options)
    const data = await res.json();
    console.log('DATA', data);
    return data;
  } catch (error) {
    console.log(error)
    return false
  };


}








