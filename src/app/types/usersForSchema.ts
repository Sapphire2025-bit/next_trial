import React from "react";

interface IUser extends Document {
    username: string;
    email: string;
    password: string;
}

export default IUser;