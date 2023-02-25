import Layout from "components/Layout/Layout";
import ApartmentsPage from "pages/ApartmentsPage";
import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";
import SignupPage from "pages/SignupPage";
import { Route, Routes } from "react-router";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/apartments" element={<ApartmentsPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
