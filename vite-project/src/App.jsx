
import Home from "./screens/Home/Home"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import { Login } from "./screens/Login/Login";
import'../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import'../node_modules/bootstrap/dist/js/bootstrap.bundle'


function App() {


  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
      </Routes>



     
    </Router>
      
  )
}

export default App
