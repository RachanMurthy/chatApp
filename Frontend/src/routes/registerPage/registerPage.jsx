import "./registerPage.scss";
import apiRequest from "../../../lib/apiRequest";
import { useState } from "react";

function RegisterPage(){

    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        setError(null);
        e.preventDefault();
        const formdata = new FormData(e.target);

        const email = formdata.get("email");
        const username = formdata.get("username");
        const password = formdata.get("password");
        console.log(email, password, username);

        try{
            const response = await apiRequest.post("/auth/register", {
                username,
                password,
                email
            });
    
            console.log(response.data);
        }catch(err){
            console.log(err);
            setError(err.response.data.message)
        }

    
    }
    return (
        <div className="registerPage">
            
            <form onSubmit={handleSubmit}>
                <h2>Register</h2>
                <label>Email</label>
                <input name="email" required/>

                <label>Username</label>
                <input name="username" required/>

                <label>Password</label>
                <input name="password" required/>

               

                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

export default RegisterPage;