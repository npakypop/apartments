import Layout from "components/Layout/Layout";
import ApartmentsPage from "pages/ApartmentsPage";
import { Route, Routes } from "react-router";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/register" element={<div>register</div>} />
        <Route path="/login" element={<div>login</div>} />
        <Route path="/apartments" element={<ApartmentsPage />} />
        <Route path="*" element={<div>Home</div>} />
      </Routes>
    </Layout>
    // <AddForm />
  );
}

export default App;
