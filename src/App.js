import './App.css';
import Sign_in from './component/signin';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Register from './component/Register';
import Navigation from './component/surveylist';
import SurveyPage from './component/SurveyPage/SurveyPage';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={"/"} element={<Sign_in />} />
          <Route path={"/Register"} element={<Register />} />
          <Route path={"/Aftersign"} element={<Navigation />} />
          <Route path={"/Surveypage"} element={<SurveyPage />} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
