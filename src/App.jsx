import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import Layout from "./components/partial/Layout";
import FilterPage from "./pages/filterPage/FilterPage";
import { SearchProvider } from "./core/context/searchContext/SearchContext";
import WishPage from "./pages/wishPage/WishPage";
import { WishProvider } from "./core/context/wishContext/WishContext";
import FilterPageRes from "./pages/filterPageRes/FilterPageRes";
import SignupPage from "./pages/signupPage/SignupPage";
import LoginPage from "./pages/loginPage/LoginPage";
import ProductsPage from "./pages/productsPage/ProductsPage";
import DetailPage from "./pages/detailPage/DetailPage";
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
              <Route path="/filterRes" element={<FilterPageRes />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:id" element={<DetailPage />} />
            </Routes>
          </Layout>
        </SearchProvider>
      </WishProvider>
    </BrowserRouter>
  );
}

export default App;