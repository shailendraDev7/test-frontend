import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import AddProject from "./pages/AddProject";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateProject from "./pages/UpdateProject";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Signup/SignUp";
import { AppContext } from "./context/AppContext";
import { useContext } from "react";

function App() {
  const { isHideHeaderAndFooter } = useContext(AppContext);
  return (
    <BrowserRouter basename="/admin">
      {!isHideHeaderAndFooter && <Header />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddProject />} />
        <Route path="/update/:id" element={<UpdateProject />} />
        <Route path="/*" element={<div>Admin 404 not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
