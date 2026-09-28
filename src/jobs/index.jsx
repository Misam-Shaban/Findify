import { useState, useEffect } from "react";
import Jobcard from "./Jobcard";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

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
