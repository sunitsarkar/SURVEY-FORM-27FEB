import "./SurveyPage.css"
import logo1 from '../assets/logo.svg';
import logo2 from '../assets/community.svg';
import hamburger from '../assets/hamburger.svg';
import person from '../assets/person.svg'



const SurveyPage = () => {

    return (
        <div>
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
                        <div id="text">Create Survey</div>
                        <button className="btns" id="btn-cancel">Cancel</button>
                        <button className="btns" id="btn-next">Next</button>
                    </div>
                    <hr></hr>
                    <div id="form">
                        <form method="" action="" id="form">
                            <div id="left-inside">
                                <label className="name-title">Name</label>
                                <input className="name-input" type={'text'} placeholder={"Name here"} />
                                <label className="description-title" >Description</label>
                                <input className="description-input" type={'text'} placeholder={"Description"} />
                                <label className="survey-title"> Type of Survey</label>
                                <select className="options-style" id="options" name="options">
                                    <option value="select">Select</option>
                                    <option value="type1">TYPE1</option>
                                    <option value="typ2">TYPE2</option>
                                </select>
                            </div>

                            <div id="right-inside">
                                <div className="date">
                                    <label className="date-title">Start Date</label>
                                    <input className="date-input" type={'date'} />
                                    <label className="date-title end-date">End Date</label>
                                    <input className="date-input" type={'date'} />
                                </div>
                                <label className="criteria-title" >Other Criteria</label>
                                <input className="criteria-input" type={'text'} placeholder={"Enter here"} />

                                <label className="image-title" >Upload Image</label>
                                <div className="uploader-input">
                                    <input  type="file" id="input-file-max-fs" class="file-upload" data-max-file-size="2M" />
                                </div>
                            </div>
                        </form>

                    </div>
                </div>

            </div>

        </div>
    )

}

export default SurveyPage;


