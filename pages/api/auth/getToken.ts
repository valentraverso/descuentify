import { getAccessToken } from '@auth0/nextjs-auth0';
import { IncomingMessage } from 'http';
import { NextApiRequest, NextApiResponse } from 'next';

async function getToken(req: IncomingMessage | NextApiRequest, res: NextApiResponse) {
    try {
        const { accessToken } = await getAccessToken(req, res);

        res.status(200).json(
            accessToken
        );
    }catch(err){
        res.status(409).json({
            msg: "We have trouble while fetching the token"
        });
    }
}

export default getToken;