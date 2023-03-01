import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import axios from 'axios'


const Register = () => {
    const navigate = useNavigate()

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(0);
    const [profession, setProfession] = useState('');
    const [password, setPassword] = useState(0);
    const [confirmPassword, setConfirmPassword] = useState(0);

    const handelSubmit = async (e) => {

        e.preventDefault();
        try {
            //instead of local host we need to use hosted backend later*************
            const res = await axios.post("http://localhost:8000/", {
                "name": name,
                "email": email,
                "phone": phone,
                "profession": profession,
                "password": password,
                "confirmPassword": confirmPassword
            });

            console.log(res.data);
        } catch (error) {
            console.error(error);
        }
        navigate("/");
    };

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
                <form method="POST" action="/" onSubmit={handelSubmit}>
                    <div className="heading1">Register</div>
                    <div className="heading2" >Register to continue access pages</div>
                    <div className="input-box">
                        <input className="reg-input" type={'text'} placeholder={"Name"} onChange={(e) => { setName(e.target.value) }} />
                        <input className="reg-input" type={'email'} placeholder={"Email"} onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div className="input-box">
                        <input className="reg-input" type={'number'} placeholder={"Phone"} onChange={(e) => { setPhone(e.target.value) }} />
                        <input className="reg-input" type={'text'} placeholder={"Profession"} onChange={(e) => { setProfession(e.target.value) }} />
                    </div>
                    <div className="input-box">
                        <input className="reg-input" type={'password'} placeholder={"Passowrd"} onChange={(e) => { setPassword(e.target.value) }} />
                        <input className="reg-input" type={'password'} placeholder={"Confirm Password"} onChange={(e) => { setConfirmPassword(e.target.value) }} />
                    </div>
                    <input  id="checkbox" type={'checkbox'} /><label className="checkbox-text"> I agree to Terms & Condition receiving marketing and promotional materials</label>

                    <button className="btns-1" type="submit" >Register</button>

                </form>

            </div>

        </div>
    )
}

export default Register;


