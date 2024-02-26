import "./App.css";
import Form from "./Components/Form";
import Create from "./Components/Create";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Viewall from "./Components/Viewall";
import Update from "./Components/Update";
import Signupform from "./Components/Signupform";
import Signup from "./Components/Signup";
import Login from './Components/Login'
import Notfound from "./Components/Notfound";





function App() {
  return (
    <>
      <Router>
       

        <Routes>
        
        <Route path="/" element={<Signupform />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="home" element={<Form />} />
          <Route path="/create" element={<Create />} />
          <Route path="/View" element={<Viewall />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path='*' element={<Notfound />}/>
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
