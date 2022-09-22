import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import DoctorLogin from "./components/Login/DoctorLogin";
import UserLogin from "./components/Login/UserLogin";
import Portal from "./components/Portal/Portal";
import Dashboard from "./components/Dashboard/Dashboard";
import ContainerList from "./components/List/ContainerList";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login/asdoctor' element={<DoctorLogin />} />
        <Route path='/login/asuser' element={<UserLogin />} />
        <Route path='/register' element={<Register />} />
        <Route path='/portal/user' element={<Portal />} >
          <Route path='List' element={<ContainerList />} />
        </Route>
        <Route path='/portal/doctor' element={<Portal />} >
          <Route path='Dashboard' element={<ContainerList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
