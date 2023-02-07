import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../../pages/Home";
import SignInPage from "../../pages/SignIn";
import SignUpPage from "../../pages/SignUp";
import ToDoPage from "../../pages/ToDo";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/todo" element={<ToDoPage />} />
      </Routes>
    </Router>
  );
}
