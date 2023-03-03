import "./createQuestion.css"
import logo1 from '../assets/logo.svg';
import logo2 from '../assets/community.svg';
import hamburger from '../assets/hamburger.svg';
import person from '../assets/person.svg';
import leftArrow from '../assets/left-arrow.svg';
import rectangleBox from '../assets/rectangle-box.svg';
import gear from '../assets/gear.svg';
// import { useState } from "react";
import axios from "axios";



const QuestionPage = () => {
    return (
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
                        <span>
                            <select className="select">
                                <option >Logout</option>
                            </select> </span>
                    </span>
                    <div className="picture-nav">
                        <img className="sort-image-person" src={person} alt="Person" />
                    </div>
                </div>
                <div className="box">
                    <img className="left-arrow" src={leftArrow} alt="leftArrow" />
                    <div id="text">Create Questions</div>
                    <button className="btns" id="btn-cancel">Preview</button>
                    <button
                        type="submit"
                        // onClick={handleSubmit}
                        className="btns"
                        id="btn-next"
                    >Save </button>
                </div>
                <div className="question-section">
                    <div className="question-title">
                        <span >Q1</span> <span className="question" >Question </span>
                        <img className="gear" src={gear} alt="gear" />
                    </div>
                    <div>
                        <input
                            className="question-input"
                            type={'text'}
                            placeholder={"Enter Question"} />
                    </div>
                    <div id="radio-btns" >
                        <input type={"radio"} value={"Value"} />  <br/>   
                        <input type={"radio"} value={"Value"} />  <br/> 
                        <input type={"radio"} value={"Value"} />   
                    </div>
                </div>
                <div className="btn-section">
                    <button
                        className="add-question-btn" >Add question</button>
                </div>

            </div>
        </div>
    )
}

export default QuestionPage;



