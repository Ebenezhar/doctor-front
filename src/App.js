import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import DoctorLogin from "./components/Login/DoctorLogin";
import UserLogin from "./components/Login/UserLogin";
import DoctorPortal from "./components/Portal/DoctorPortal";
import UserPortal from "./components/Portal/UserPortal";
import DoctorRegister from "./components/Register/DoctorRegister";
import UserRegister from "./components/Register/UserRegister";
import DoctorHome from "./pages/Home/Doctor/DoctorHome";
import UserHome from "./pages/Home/User/UserHome";
import DoctorAvailability from "./pages/Availability/DoctorAvailability";
import DoctorPrescription from "./pages/Prescription/DoctorPrescription";
import UserToken from "./pages/Token/UserToken";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login/asdoctor' element={<DoctorLogin />} />
        <Route path='/login/asuser' element={<UserLogin />} />
        <Route path='/doctorRegister' element={<DoctorRegister />} />
        <Route path='/userRegister' element={<UserRegister />} />

        <Route path='/portal/doctor' element={<DoctorPortal />} >
          <Route path='/portal/doctor' element={<DoctorHome />} />
          <Route path='/portal/doctor/availability' element={<DoctorAvailability />} />
          <Route path='/portal/doctor/prescription' element={<DoctorPrescription />} />
        </Route>
        <Route path='/portal/user' element={<UserPortal />} >
          <Route path='/portal/user' element={<UserHome />} />
          <Route path='/portal/user/token' element={<UserToken />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
