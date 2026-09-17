import { useParams } from "react-router-dom";
import JobCardData from "../Jobdata.json";

function JobDescription() {
  const { id } = useParams();

  const job = JobCardData.find((item) => item.id === Number(id));

  return (
    <div className="job-description-page">
      <div className="job-description-header">
        <div className="job-company-info">
          <img src={job.logo} alt={job.company} className="job-company-logo" />

          <div>
            <h1>{job.title}</h1>
            <h2>{job.company}</h2>
            <p>{job.jobDescription.detailedLocation}</p>
          </div>
        </div>

        <button className="description-apply-btn">Apply Now</button>
      </div>

      <div className="job-description-content">
        <section>
          <h3>Job Description</h3>
          <p>{job.jobDescription.description}</p>
        </section>

        <section>
          <h3>About the Job</h3>
          <p>{job.jobDescription.aboutJob}</p>
        </section>

        <section>
          <h3>Requirements</h3>

          <ul>
            {job.jobDescription.requirements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3>Preferred Skills</h3>

          <div className="skills-container">
            {job.jobDescription.preferredSkills.map((item, index) => (
              <span key={index} className="skill">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h3>Additional Skills</h3>

          <div className="skills-container">
            {job.jobDescription.additionalSkills.map((item, index) => (
              <span key={index} className="skill">
                {item}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default JobDescription;
