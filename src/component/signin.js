import "./signin.css";
import { Link } from "react-router-dom";



const Sign_in = () => {
    return <div className="frontpage">
        <div className="left-side">
            <div className="welcome-text">Welcome Page</div>
            <div className="below-text">One line text Will be here</div>
            <div className="text-small">Sign in to continue access pages</div>
            <div className="small-text">Don’t Have An Account?</div>
            <Link to={"/Register"}>
                <button  className="btns">Register</button>
            </Link>

        </div>
        <div className="right-side">
            <div className="Inner-box">
                <div className="Sign-in-heading">Sign In</div>
                <div className="Below-heading">Sign in to continue access pages</div>
                <div className="inp">
                    <input placeholder="Email" type="email" />
                </div>
                <div className="inp">
                    <input className="hov" placeholder="Password" type="password" />
                </div>
                <button className="signin-button"  >Sign In</button>
            </div>
        </div>
    </div>

}

export default Sign_in