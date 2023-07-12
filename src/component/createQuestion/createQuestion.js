import "./createQuestion.css"
import logo1 from '../assets/logo.svg';
import logo2 from '../assets/community.svg';
import hamburger from '../assets/hamburger.svg';
import person from '../assets/person.svg';
import leftArrow from '../assets/left-arrow.svg';
// import rectangleBox from '../assets/rectangle-box.svg';
import gear from '../assets/gear.svg';
import { useState } from "react";

import { useLocation, useNavigate } from 'react-router-dom';




const QuestionPage = () => {
    var n=0;
    const [question, setQuestion] = useState([""]);
    const [option, setoption] = useState([""]);
    const [shift , setshift] = useState(true);
    const [title, settitle] = useState("Create Questions");
    const [preview , setpreview] = useState("Preview");
    const [selectedOption, setSelectedOption] = useState('');
    const location=useLocation();
    const ref=location.state.ref;

    
    function Newquestion(){
        //  console.log(question)
        setQuestion([...question,""])
    }
    function previewpage(){
        if(shift===true){
        setshift(false)
        settitle("Preview")
        setpreview("Close Preview")}
        else{
            setshift(true)
            settitle("Create Questions")
            setpreview("Preview")
        }
    }
    function savedata(value,index){
        // console.log(question);
        const Newquestion=question.map((que,queindex)=>{
            return queindex === index ? value : que 
        })
        setQuestion(Newquestion)
    }
      const navigate = useNavigate();
      const logout = () => {
        localStorage.removeItem('token');
        navigate("/");
        alert("Logged Out");
        document.location.reload()
    };

    const handleSubmit=()=>{
        alert("Questions saved Successfully");
        navigate("/Surveylist",{
            state:{
                ref:ref
            }
        })
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
                        <button onClick={logout}>logout</button>
                    </span>
                    <div className="picture-nav">
                        <img className="sort-image-person" src={person} alt="Person" />
                    </div>
                </div>
                <div className="box">
                    <img className="left-arrow" src={leftArrow} alt="leftArrow" />
                    <div id="text">{title}</div>
                    <button className="btns" id="btn-cancel" onClick={previewpage}>Preview</button>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="btns"
                        id="btn-next"
                        // onClick={()=>alert("Questions saved Successfully")}
                    >Save </button>
                </div>
   {shift && <div>  {question.map((que,index)=>{
                    n=n+1;
                return <div  className="question-section">
                    <div className="question-title">
                        <span >Q{n}</span> <span className="question" >Question </span>
                        <img className="gear" src={gear} alt="gear" />
                    </div>
                    <div>
                        <input onChange={(e)=>savedata(e.target.value,index)}
                            className="question-input"
                            type={'text'}
                            placeholder={"Enter Question"} />
                    </div>
                    <div className="radio-btns" >
                             <input type={"radio"} name="k" value={"Value"} /> 
                            <input className="radio-input" type={'text'} placeholder={"Value"} />
                             <br />
                            <input type={"radio"} name="k" value={"Value"} /> 
                            <input className="radio-input" type={'text'} placeholder={"Value"} />
                             <br />
                             <input type={"radio"} name="k" value={"Value"} /> 
                             <input className="radio-input" type={'text'} placeholder={"Value"} />
                             <br />
                           
                    </div>
                </div>
        }) }

                <div className="btn-section">
                    <button  className="add-question-btn" 
                    onClick={()=>Newquestion()}>Add question</button>
                </div>
                </div>}
                {!shift && <div>    
                    {
                        question.map((que ,index )=>{
                            return <div className="preview">
                                <div className="que">Question {index+1}</div>
                                <div className="allques">{que}</div>
                                <div className="val">Values</div>
                                </div>
                        })
                    }
                    
                    </div>}
            </div>
        </div>
    )
}

export default QuestionPage ;



