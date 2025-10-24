import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import Layout from "./components/partial/Layout";
import FilterPage from "./pages/filterPage/FilterPage";
import { SearchProvider } from "./core/context/searchContext/SearchContext";
function App() {
  return (
    <BrowserRouter>
      <SearchProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/filter" element={<FilterPage />} />
          </Routes>
        </Layout>
      </SearchProvider>
    </BrowserRouter>
  );
}

export default App;