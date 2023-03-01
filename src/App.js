import './App.css';
import Sign_in from './component/signin';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Register from './component/Register';
import Navigation from './component/nav';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={"/"} element={<Sign_in />} />
          <Route path={"/Register"} element={<Register />} />
          <Route path={"/Aftersign"} element={<Navigation />} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
