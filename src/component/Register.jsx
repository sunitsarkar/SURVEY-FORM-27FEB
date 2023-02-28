import { Link } from "react-router-dom";
import "./Register.css"


const Register = () => {
    return (
        <div className="main-div">
            <div className="left-side">
                <div className="welcome-text">Welcome Page</div>
                <div className="below-text">One line text Will be here</div>
                <div className="text-small">Sign in to continue access pages</div>
                <div className="small-text">Already Have An Account?</div>
                <Link to={'/'}>
                <button id="btn-signin" >Sign In</button>
                </Link>
            </div>
            <div className="container">
                    <form>
                        <div className="heading1">Register</div>
                        <div className="heading2" >Register to continue access pages</div>
                        <div className="input-box">
                            <input type={'text'} placeholder={"Name"} /> 
                            <input type={'email'} placeholder={"Email"} />
                        </div>
                        <div className="input-box">
                            <input type={'number'} placeholder={"Phone"} />
                            <input type={'text'} placeholder={"Profession"} />
                        </div>
                        <div className="input-box">
                            <input type={'password'} placeholder={"Passowrd"} />
                            <input type={'password'} placeholder={"Confirm Password"} />
                        </div>
                        <input id="checkbox" type={'checkbox'} /><label className="checkbox-text"> I agree to Terms & Condition receiving marketing and promotional materials</label>
                        
                        <button className="btns-1" >Register</button>
                        
                    </form>
               
            </div>

        </div>
    )
}

export default Register;


