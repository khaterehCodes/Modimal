import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import Layout from "./components/partial/Layout";
import FilterPage from "./pages/filterPage/FilterPage";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/filter" element={<FilterPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;