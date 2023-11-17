import React from "react";
import { useState } from "react";

//create three state variables, username, password, error


const SignUpForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
   //define an async function called "handleSubmit"
   const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page refresh
    console.log('Form submitted!');
   }

    return (
    <>
    <h2>Sign Up!</h2>
            <form onSubmit={handleSubmit}>
                <label>
                Username: <input value={username} onChange={(event) => (event. target. value)} />
                </label>
                <label>
                Password: <input value={password} onChange={(event) => (event. target. value)}/>
                </label>
                <button>Submit</button>
            </form>
    </>
)};


export default SignUpForm;