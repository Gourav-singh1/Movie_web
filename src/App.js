import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./Components/LoginPage";
import AddMovie from "./Components/AddMovie";
import CreateMovie from "./Components/CreateMovie";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/AddMovie" element={<AddMovie />} />
        <Route path="/CreateMovie" element={<CreateMovie />} />
      </Routes>
    </>
  );
}

export default App;
