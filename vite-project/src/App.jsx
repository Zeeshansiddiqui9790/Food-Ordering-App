
import Home from "./screens/Home/Home"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import { Login } from "./screens/Login/Login";
import'../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import'../node_modules/bootstrap/dist/js/bootstrap.bundle'
import SignUp from "./screens/SignUp/SignUp";


function App() {


  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/createuser" element={<SignUp/>}/>
      </Routes>



     
    </Router>
      
  )
}

export default App
