import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "../../components/Layouts/DefaultLayout/DefaultLayout";
import HomePage from "../../pages/Home";
import SignInPage from "../../pages/SignIn";
import SignUpPage from "../../pages/SignUp";
import TodoPage from "../../pages/Todo";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <HomePage />
            </DefaultLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <DefaultLayout>
              <SignUpPage />
            </DefaultLayout>
          }
        />
        <Route
          path="/signin"
          element={
            <DefaultLayout>
              <SignInPage />
            </DefaultLayout>
          }
        />
        <Route
          path="/todo"
          element={
            <DefaultLayout>
              <TodoPage />
            </DefaultLayout>
          }
        />
      </Routes>
    </Router>
  );
}
