import React from "react";
import { useState } from "react";

//create three state variables, username, password, error


const SignUpForm = () => {
    const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);
    return 
    <>
    <h2>Sign Up!</h2>
            <form>
                <label>
                Username: <input type="submit" />
                </label>
                <label>
                Password: <input type="submit" />
                </label>
            </form>
    </>
};


export default SignUpForm;