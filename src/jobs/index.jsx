import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Jobcard from "./Jobcard";

const Jobs = () => {
  const [jobs, setJobs] = useState(null);
  const [searchParams] = useSearchParams();

  const keyword = searchParams.get("keyword") || "";
  const location = searchParams.get("location") || "";

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

  if (!jobs) {
    return (
      <div className="loading-container">
        <p className="loading-text">Loading jobs...</p>
      </div>
    );
  }

  const filteredJobs = jobs.filter((job) => {
    const matchesKeyword =
      !keyword ||
      job.title.toLowerCase().includes(keyword.toLowerCase()) ||
      job.company.toLowerCase().includes(keyword.toLowerCase());

    const matchesLocation =
      !location || job.location.toLowerCase().includes(location.toLowerCase());

    return matchesKeyword && matchesLocation;
  });

  if (filteredJobs.length === 0) {
    return (
      <div className="loading-container">
        <p className="loading-text">No jobs match your search.</p>
      </div>
    );
  }

  return (
    <div className="showCard">
      {filteredJobs.map(function ({
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
