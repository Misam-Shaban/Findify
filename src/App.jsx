import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobDescription from "./jobs/JobDescription";
import Jobs from "./jobs";
import AddJob from "./jobs/Addjob";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Jobs />} />
        <Route path="/job/:id" element={<JobDescription />} />
        <Route path="/add-job" element={<AddJob />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
