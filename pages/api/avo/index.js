import {NextApiRequest, NextApiResponse} from 'next';
import Database from '@database/database';

const allAvos = async (request, response) => {

    const entries = await Database.getAll();
    const length = entries.length;
    
    response.status(200).json({data: entries, length});
}

export default allAvos;