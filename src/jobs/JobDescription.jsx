import { useState } from "react";
import { FaEdit, FaTrashAlt, FaMapMarkerAlt } from "react-icons/fa";

function JobDescription({ job, onEdit, onDelete }) {
  const [open, setOpen] = useState("1");
  const toggle = (id) => setOpen(open === id ? null : id);

  const sections = [
    {
      id: "1",
      title: "Job Description",
      content: <p>{job.jobDescription?.description}</p>,
    },
    {
      id: "2",
      title: "About the Job",
      content: <p>{job.jobDescription?.aboutJob}</p>,
    },
    {
      id: "3",
      title: "Requirements",
      content: (
        <ul>
          {job.jobDescription?.requirements?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      ),
    },
    {
      id: "4",
      title: "Preferred Skills",
      content: (
        <div className="skills-container">
          {job.jobDescription?.preferredSkills?.map((item, i) => (
            <span key={i} className="skill">
              {item}
            </span>
          ))}
        </div>
      ),
    },
    {
      id: "5",
      title: "Additional Skills",
      content: (
        <div className="skills-container">
          {job.jobDescription?.additionalSkills?.map((item, i) => (
            <span key={i} className="skill">
              {item}
            </span>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="job-detail">
      <div className="job-detail-header">
        <div className="job-company-info">
          <img src={job.logo} alt={job.company} className="job-company-logo" />
          <div>
            <h1>{job.title}</h1>
            <h2>{job.company}</h2>
            <p className="job-loc">
              <FaMapMarkerAlt /> {job.jobDescription?.detailedLocation}
            </p>
          </div>
        </div>

        <div className="job-detail-actions">
          <button className="button button--accent" type="button">
            Apply Now
          </button>
          <button
            className="icon-action"
            onClick={onEdit}
            title="Edit"
            aria-label="Edit"
          >
            <FaEdit />
          </button>
          <button
            className="icon-action icon-action--danger"
            onClick={onDelete}
            title="Delete"
            aria-label="Delete"
          >
            <FaTrashAlt />
          </button>
        </div>
      </div>

      <div className="job-accordion">
        {sections.map((sec) => (
          <div key={sec.id} className="acc-item">
            <button
              className={`acc-trigger${open === sec.id ? " open" : ""}`}
              onClick={() => toggle(sec.id)}
              type="button"
            >
              <span>{sec.title}</span>
              <span className="acc-icon">{open === sec.id ? "−" : "+"}</span>
            </button>
            {open === sec.id && <div className="acc-body">{sec.content}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobDescription;
