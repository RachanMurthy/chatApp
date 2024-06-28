import "./loginPage.scss";
import { Link } from "react-router-dom";
import apiRequest from "../../../lib/apiRequest";
import { useState } from "react";

function LoginPage(){

    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        setError(null);
        e.preventDefault();
        const formdata = new FormData(e.target);


        const username = formdata.get("username");
        const password = formdata.get("password");
        console.log(password, username);

        try{
            const response = await apiRequest.post("/auth/login", {
                username,
                password
            });
        
        }catch(err){
            console.log(err.response.data.message);
            setError(err.response.data.message)
        }
    }

    return (
        <div className="loginPage">
            <form onSubmit={handleSubmit}>
                {error && <p>{error}</p>}
                <h2>Login</h2>

                <label>Username</label>
                <input name="username" required/>

                <label>Password</label>
                <input name="password" required/>

                <div className="noAccount">
                    <p>No account?</p>
                    <Link to="/register">Register</Link>
                </div>


                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default LoginPage;