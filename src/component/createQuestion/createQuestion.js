import "./createQuestion.css"
import logo1 from '../assets/logo.svg';
import logo2 from '../assets/community.svg';
import hamburger from '../assets/hamburger.svg';
import person from '../assets/person.svg';
import leftArrow from '../assets/left-arrow.svg';
// import rectangleBox from '../assets/rectangle-box.svg';
import gear from '../assets/gear.svg';
import { useState } from "react";
import axios from "axios";



const QuestionPage = () => {
    var n = 0;
    const [number, setNumber] = useState(1);
    const [question, setQuestion] = useState([""]);
    const [option1, setOPtion1] = useState();
    const [option2, setOPtion2] = useState();
    const [option3, setOPtion3] = useState();
    const [num, setNum] = useState(0);

    function Newquestion() {

        setQuestion([...question, ""])
    }


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
                {question.map((que) => {
                    n = n + 1;
                    return <div className="question-section">
                        <div className="question-title">
                            <span >Q{n}</span> <span className="question" >Question </span>
                            <img className="gear" src={gear} alt="gear" />
                        </div>
                        <div>
                            <input
                                className="question-input"
                                type={'text'}
                                placeholder={"Enter Question"} />
                        </div>
                        <div className="radio-btns" >
                             <input type={"radio"} value={"Value"} /> 
                            <input className="radio-input" type={'text'} placeholder={"Value"} />
                             <br />
                            <input type={"radio"} value={"Value"} /> 
                            <input className="radio-input" type={'text'} placeholder={"Value"} />
                             <br />
                            <input type={"radio"} value={"Value"} />
                            <input className="radio-input" type={'text'} placeholder={"Value"} /> 
                        </div>
                    </div>
                })}

                <div className="btn-section">
                    <button className="add-question-btn"
                        onClick={() => Newquestion()}>Add question</button>
                </div>

            </div>
        </div>
    )
}

export default QuestionPage;



