import "./loginPage.scss";
import { Link } from "react-router-dom";

function LoginPage(){
    return (
        <div className="loginPage">
            <form>
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