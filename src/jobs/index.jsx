import { useState, useEffect } from "react";
import Jobcard from "./Jobcard";

const Jobs = () => {
  // 1. Initial state null rakhi hai taake loading check lag sake
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    fetch("https://job-cards-with-react-production.up.railway.app/api/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (mongoId) => {
    try {
      const response = await fetch(
        `https://job-cards-with-react-production.up.railway.app/api/jobs/${mongoId}`,
        { method: "DELETE" },
      );

      if (response.ok) {
        setJobs(jobs.filter((job) => job._id !== mongoId));
      }
    } catch (err) {
      console.log(err);
    }
  };

  // 2. FIX: Jab tak data nahi aata, clean loading screen dikhayen taake unstyled components render na hon
  if (!jobs) {
    return (
      <div
        className="loading-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "#151515" /* Aapka theme background color */,
        }}
      >
        <p
          style={{
            color: "#a1a1aa",
            fontSize: "1.2rem",
            fontFamily: "sans-serif",
          }}
        >
          Loading jobs...
        </p>
      </div>
    );
  }

  // 3. No Jobs Found check (Optional but safe practice)
  if (jobs.length === 0) {
    return (
      <div
        className="loading-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "#fcf6f6",
        }}
      >
        <p style={{ color: "#a1a1aa", fontSize: "1.2rem" }}>
          No jobs available at the moment.
        </p>
      </div>
    );
  }

  // Real cards layout aur CSS tabhi chalegi jab data array fully available hoga
  return (
    <div className="showCard">
      {jobs.map(function ({
        _id,
        id,
        logo,
        company,
        postedDays,
        tags,
        title,
        location,
        price,
      }) {
        return (
          <div key={_id} className="main-div">
            <Jobcard
              id={id}
              mongoId={_id}
              logo={logo}
              company={company}
              postedDays={postedDays}
              title={title}
              tags={tags}
              price={price}
              location={location}
              onDelete={handleDelete}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Jobs;
