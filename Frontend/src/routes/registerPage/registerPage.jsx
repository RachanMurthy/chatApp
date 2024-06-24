import "./registerPage.scss";

function RegisterPage(){
    return (
        <div className="registerPage">
            
            <form>
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