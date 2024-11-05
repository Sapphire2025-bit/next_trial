import React from "react";
import axios from "axios";

async function getCard (id: string)
{
    const response = await axios.get(`https://dummyjson.com/users/${id}`);
    return response.data;
}

export default getCard;