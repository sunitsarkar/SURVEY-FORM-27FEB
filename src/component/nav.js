import React from "react"
import logo1 from './assets/logo.svg';
import logo2 from './assets/community.svg';
import hamburger from './assets/hamburger.svg';
import sort from './assets/sort.svg';
import filter from './assets/sortfilter.svg'
import person from './assets/person.svg'
import "./nav.css"

function Navigation() {
    return <>
        <div className="main">
            <div className="left-nav">
                <span>
                <img src={logo1} alt="logo1" />
                </span>
                <span className="icon2">
                <img  src={logo2} alt="logo2" />
                </span>
                <span className="three-line">
                <img className="three" src={hamburger} alt="hamburger" />
                </span>
            </div>
            <div className="right-side">
                <div className="top-nav">
                    <span>Logo</span>
                    <span className="right">
                        <span>
                            <select className="select">
                                <option >Logout</option>
                            </select> </span>
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
                        <button>Create</button>
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
                <table>
                    <tr>
                        {/* <td>Survey Name</td>
                        <td className="table-desc">This survey is about this topic </td>
                        <td>Feedback </td>
                        <td>10-feb-2020 </td>
                        <td>27-feb-2020 </td>
                        <td>Action</td> */}
                    </tr>
                </table>
            </div>
        </div>
    </>
}

export default Navigation