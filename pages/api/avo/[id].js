import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Database from '@database/database';


const product = async (request, response) => {

    const id = request.query.id;
    const entries = await Database.getById(id);
    const length = entries.length;
    
    response.status(200).json({data: entries});
}

export default product;