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

  return (
    <div className="showCard">
      {jobs.map(function ({
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
          <div key={id} className="main-div">
            <Jobcard
              id={id}
              logo={logo}
              company={company}
              postedDays={postedDays}
              title={title}
              tags={tags}
              price={price}
              location={location}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Jobs;
