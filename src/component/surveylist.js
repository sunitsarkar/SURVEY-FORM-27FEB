import React from "react";
import { useEffect, useState } from "react"
import logo1 from './assets/logo.svg';
import logo2 from './assets/community.svg';
import hamburger from './assets/hamburger.svg';
import sort from './assets/sort.svg';
import filter from './assets/sortfilter.svg'
import person from './assets/person.svg'
import "./SurveyList.css"
import axios from 'axios';
import { useLocation, useNavigate } from "react-router-dom";

function Navigation() {
    const location=useLocation();
    const navigate = useNavigate();
    const ref=location.state.ref;
    const headers = { "Authorization": localStorage.getItem("token") };

    const url = 'https://survey-backend-viqm.onrender.com'
    // function get
    function getSurveyList() {

        return axios.get(url + `/survey/surveys?ref=${ref}`,{headers})
            .then(res => {
                if (res.status === 200 && res.data) {
                    // console.log("ok")
                    return res.data
                }
                throw new Error('Not able to fetch posts')
            })
    }

    const deleteSurvey = async (id) => {
        await axios.delete(url + `/survey/surveys/:${id}/delete`).then(res => (console.log('deleted', res))).catch(err => (console.log(err)))
    }

    function Surveys() {

        const [survey, setsurvey] = useState([])
        // console.log(getUserPosts())
        useEffect(() => {
            getSurveyList()
                .then(data => {
                    // console.log(data)
                    setsurvey(data)
                }).catch(err => {
                    alert(err.message)
                })
        }, []);
        // console.log(survey);


        return <div id="survey-container">
            {
                survey.map(list => {
                    return <table key={list._id}>
                        <tr>
                            <td className="first-tdd">{list.name}</td>
                            <td className="description-table2">{list.description}</td>
                            <td className="third-td">{list.type}</td>
                            <td className="forth-td">{list.startDate} </td>
                            <td className="fifth-td">{list.endDate}</td>
                            <td><button>Edit</button><button onClick={() => { deleteSurvey(list._id) }} >Delete</button> </td>
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
                        <span>Survey List</span>
                    </div>
                    <div className="search-container">
                        <input className="search" type="text" placeholder="Search" />
                        <button onClick={() => navigate('/Surveypage',{state:{ref:ref}})}>Create</button>
                        <img className="sort-image" src={sort} alt="sort" />
                        <img className="sort-image" src={filter} alt="sort" />

                    </div>
                </div>

                <div className="title">
                    <span>Name</span>
                    <span className="description-table">Description</span>
                    <span>Type</span>
                    <span>Start Date</span>
                    <span>End Date</span>
                    <span>Action</span>
                </div>

                {Surveys()}

            </div>
        </div>
    </>
}

export default Navigation