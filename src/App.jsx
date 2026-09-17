import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobDescription from "./jobs/JobDescription";
import Jobs from "./jobs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Jobs />} />
        <Route path="/job/:id" element={<JobDescription />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
