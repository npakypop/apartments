import Layout from "components/Layout/Layout";

import { useAuth } from "hooks/useAuth";
import ApartmentsPage from "pages/ApartmentsPage";
import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";
import SignupPage from "pages/SignupPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router";
import { checkAuthState } from "redux/auth/operations";

function App() {
  const dispatch = useDispatch();
  const { isLoading, isLoggedIn } = useAuth();

  useEffect(() => {
    dispatch(checkAuthState());
  }, [dispatch]);

  if (isLoading) {
    return <div>loading</div>;
  }

  return isLoggedIn ? (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apartments" element={<ApartmentsPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Layout>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
