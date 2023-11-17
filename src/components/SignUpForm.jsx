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
    //console.log('Form submitted!');
        try {
            const response = await fetch ("https://fsa-jwt-practice.herokuapp.com/signup",
                {method: "POST",
            headers: {
                "Content-Type" : "aplicaction/json"
            },
            body: JSON.stringify ({
                username: username,
                password: password
            })
        });

        const result = await response.json();
        console.log(result);
                


            setError(null);
        } catch (error) {
            setError(error.message);
        }
   };

    return (
    <>
     <h2>Sign Up!</h2>

         {error && <p>{error}</p>}

            <form onSubmit={handleSubmit}>
                <label>
                Username: <input type="text" value={username} onChange={(event) => (setUsername (event.target.value) )} />
                </label>
                <label>
                Password: <input type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                </label>
                <button>Submit</button>
            </form>
    </>
)};


export default SignUpForm;