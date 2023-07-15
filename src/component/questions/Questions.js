import React from "react";
import { useEffect, useState } from "react"
import logo1 from '../assets/logo.svg'
import logo2 from '../assets/community.svg';
import hamburger from '../assets/hamburger.svg';
import sort from '../assets/sort.svg';
import filter from '../assets/sortfilter.svg'
import person from '../assets/person.svg'
import './questions.css'
import axios from 'axios';
import { useLocation, useNavigate } from "react-router-dom";

export default function Getquestions() {
    const location = useLocation();
    const navigate = useNavigate();
    const name = location.state.name;

    const url = 'https://survey-backend-viqm.onrender.com'

    function Questions() {

        const [question, setQuestion] = useState([])
        // get question
        useEffect(() => {
            axios.get(url + `/survey/question/questions?name=${name}`)
            .then(res => {
                setQuestion(res.data);
                // console.log(res.data)
            }).catch(err => {
                alert(err.message)
            })
        });

        return <div id="survey-container">
            {
                question.map(list => {
                    return <table key={list._id} >
                        <tr>
                            <td className="first-tdd">{list.surveyName}</td>
                            <td className="description-table2">{list.question}</td>
                            <td className="third-td">{list.options}</td>
                        </tr>
                    </table>
                })
            }

        </div>
    }

    const logout = () => {
        localStorage.removeItem('token');
        navigate("/");
        alert("Logged Out");
        document.location.reload()
    }


    return <>
        <div className="main">
            <div className="left-nav">
                <span>
                    <img src={logo1} alt="logo1" />
                </span>
                <span className="icon2">
                    <img src={logo2} alt="logo2" />
                </span>
                <span className="three-line">
                    <img className="three" src={hamburger} alt="hamburger" />
                </span>
            </div>
            <div className="right-side">
                <div className="top-nav">
                    <span>Logo</span>
                    <span className="right">
                        <button onClick={logout}>logout</button>
                    </span>
                    <div className="picture-nav">
                        <img className="sort-image-person" src={person} alt="Person" />
                    </div>
                </div>
                {/* ----------------------------------------------- */}
                <div class="navbar">
                    <div class="logo">
                        <span>Questions List</span>
                    </div>
                    <div className="search-container">
                        <input className="search" type="text" placeholder="Search" />
                        <img className="sort-image" src={sort} alt="sort" />
                        <img className="sort-image" src={filter} alt="sort" />
                    </div>
                </div>

                <div className="title">
                    <span>Survey Name</span>
                    <span className="description-table">Question</span>
                    <span>Answer</span>
                </div>

                {Questions()}

            </div>
        </div>
    </>
}

