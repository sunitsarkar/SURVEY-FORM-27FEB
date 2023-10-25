import './App.css';
import SignIn from './component/signin';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Register from './component/Register';
import Surveylist from './component/surveylist';
import SurveyPage from './component/SurveyPage/SurveyPage';
import QuestionPage from './component/createQuestion/createQuestion';
import Getquestions from './component/questions/Questions';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={"/"} element={<SignIn/>} />
          <Route path={"/Register"} element={<Register />} />
          <Route path={"/Surveylist"} element={<Surveylist />} />
          <Route path={"/Surveypage"} element={<SurveyPage />} />
          <Route path={"/Questions"} element={<QuestionPage />} />
          <Route path={"/getquestions"} element={<Getquestions/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
