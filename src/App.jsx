import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout";
import LayoutWithIcons from "./components/LayoutWithIcons";
import LandingPage from "./LandingPage";
import Jobs from "./jobs";
import AddJob from "./jobs/Addjob";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* HOME → old navbar */}
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
        </Route>

        {/* BAQI SAB → icons wala navbar */}
        <Route element={<LayoutWithIcons />}>
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:id" element={<Jobs />} />
          <Route path="/add-job" element={<AddJob />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
