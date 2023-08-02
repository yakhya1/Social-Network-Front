import { Routes, Route } from "react-router-dom";
import SignUp from "../components/Sign/SignUp";
import SignIn from "../components/Sign/SignIn";
import Sidebar from "../components/Sidebar/Sidebar";

const Routers = () => {
  return (
    <Routes>
      <Route path="/register" element={<SignUp />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/sidebar" element={<Sidebar/>}/>
    </Routes>
  );
};

export default Routers;
