import React from "react";
import axios from "axios";

async function getAll ()
{
    const response = await axios.get(`https://dummyjson.com/users`);
    return response.data.users;
}

export default getAll;