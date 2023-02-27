import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from '../../mongoConnection';


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {

    const connection = await connectToDatabase();

    const db = connection.db;

    switch(req.method){
        case 'GET':

            const allCards = await db
            .collection("cards")
            .find({})
            .toArray();

            return res.status(200).json(allCards)
        break;

        
        case 'POST':
            try{
                const result = await db.collection("cards").insertOne(req.body);

                return res.status(200).json(result)
            }catch(error){
                return res.status(500).json(error)
            }

        break;
    }
  
  }