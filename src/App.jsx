import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobDescription from "./jobs/JobDescription";
import Jobs from "./jobs";
import AddJob from "./jobs/Addjob";
import EditJob from "./jobs/EditJob";
import LandingPage from "./LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/job/:id" element={<JobDescription />} />
        <Route path="/add-job" element={<AddJob />} />
        <Route path="/edit/:id" element={<EditJob />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
