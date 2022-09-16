import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import DoctorLogin from "./components/Login/DoctorLogin";
import UserLogin from "./components/Login/UserLogin";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login/asdoctor' element={<DoctorLogin />} />
        <Route path='/login/asuser' element={<UserLogin />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
