import "./signin.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";




const SignIn = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const url='https://survey-backend-viqm.onrender.com'

    const Authsignin = async (e) => {
        // console.log(email, password)
        e.preventDefault();
        axios.post(url+"/signin", {
            "email": email,
            "password": password
        }).then((res)=>{
            if(res.data.status === 'success'){
                window.localStorage.setItem('token',res.data.token);

                navigate("/Surveylist",{
                    state:{
                      ref:email
                    }
                  })
            }
        }).catch((error)=>{
            console.error(error);
            alert("Invalid Credientials")
        })

        // try {
        //     const res = await axios.post(url+"/signin", {
        //         "email": email,
        //         "password": password
        //     });

        //     navigate("/Surveylist")
        //     console.log(res.data);
        // } catch (error) {
        //     console.error(error);
        //     alert("Invalid Credientials")
        // }
       
    }


return <div className="frontpage">
    <div className="left-side">
        <div className="welcome-text">Welcome!</div>
        <div className="below-text">Create your Survey form easily, here</div>
        <div className="text-small">Sign in to continue access pages</div>
        <div className="small-text">Don’t Have An Account?</div>
        <Link to={"/Register"}>
            <button className="btns">Register</button>
        </Link>

    </div>
    <div className="right-side">
        <div className="Inner-box">
            <div className="Sign-in-heading">Sign In</div>
            <div className="Below-heading">Sign in to continue access pages</div>

            <form method="POST" action="" onSubmit={Authsignin}>
                <div className="inp">
                    <input placeholder="Email"
                        type="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="inp">
                    <input className="hov"
                        placeholder="Password" type="password"
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className="signin-button" type="submit" >Sign In</button>
            </form>
        </div>
    </div>
</div>

}

export default SignIn