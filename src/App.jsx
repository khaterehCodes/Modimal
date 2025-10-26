import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import Layout from "./components/partial/Layout";
import FilterPage from "./pages/filterPage/FilterPage";
import { SearchProvider } from "./core/context/searchContext/SearchContext";
import WishPage from "./pages/wishPage/WishPage";
import { WishProvider } from "./core/context/wishContext/WishContext";
function App() {
  return (
    <BrowserRouter>
      <WishProvider>
        <SearchProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/filter" element={<FilterPage />} />
              <Route path="/wishPage" element={<WishPage />} />
            </Routes>
          </Layout>
        </SearchProvider>
      </WishProvider>
    </BrowserRouter>
  );
}

export default App;