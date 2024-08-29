import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import CataloguePage from "./pages/CataloguePage/CataloguePage";
import CampervanPage from "./pages/CampervanPage/CampervanPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Layout from "./components/Layout/Layout.jsx";

function App() {
  return (
    <Layout Layout>    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CataloguePage />} />
        <Route path="/catalog/:id" element={<CampervanPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
