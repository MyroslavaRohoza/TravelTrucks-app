import { Routes, Route } from "react-router-dom";
import css from "./App.module.css";
import HomePage from "./pages/HomePage/HomePage.jsx";
import CataloguePage from "./pages/CataloguePage/CataloguePage";
import CampervanPage from "./pages/CampervanPage/CampervanPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Layout from "./components/Layout/Layout.jsx";
import Features from "./components/Features/Features.jsx";
import Reviews from "./components/Reviews/Reviews.jsx";
import SelectedCampers from "./pages/SelectedCampers/SelectedCampers.jsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CataloguePage />} />
        <Route path="/favorites" element={<SelectedCampers />} />
        <Route path="/catalog/:id/*" element={<CampervanPage />}>
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
