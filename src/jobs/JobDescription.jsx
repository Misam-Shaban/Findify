import { useParams } from "react-router-dom";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import { useState, useEffect } from "react";

function JobDescription() {
  const [open, setOpen] = useState("1");
  const [job, setJob] = useState(null);

  const toggle = (id) => {
    if (open === id) {
      setOpen(null);
    } else {
      setOpen(id);
    }
  };

  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://job-cards-with-react-production.up.railway.app/api/jobs/${id}`,
    )
      .then((res) => res.json())
      .then((data) => setJob(data))
      .catch((err) => console.log(err));
  }, [id]);

  // FIX: Loading ke waqt page ki baki CSS ko load hone se rokne ke liye independent container lagaya hai
  if (!job) {
    return (
      <div
        className="loading-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "#fdf8f8" /* Aapka theme background color */,
        }}
      >
        <p
          style={{
            color: "#a1a1aa",
            fontSize: "1.2rem",
            fontFamily: "sans-serif",
          }}
        >
          Loading job details...
        </p>
      </div>
    );
  }

  // Asli HTML aur CSS tabhi load hogi jab API ka data complete aa chuka hoga
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

      <div>
        <Accordion open={open} toggle={toggle}>
          <AccordionItem className="border-0">
            <AccordionHeader targetId="1">Job Description</AccordionHeader>
            <AccordionBody accordionId="1">
              <p>{job.jobDescription.description}</p>
            </AccordionBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionHeader targetId="2">About the Job</AccordionHeader>
            <AccordionBody accordionId="2">
              <p>{job.jobDescription.aboutJob}</p>
            </AccordionBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionHeader targetId="3">Requirements</AccordionHeader>
            <AccordionBody accordionId="3">
              <ul>
                {job.jobDescription.requirements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </AccordionBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionHeader targetId="4">Preferred Skills</AccordionHeader>
            <AccordionBody accordionId="4">
              <div className="skills-container">
                {job.jobDescription.preferredSkills.map((item, index) => (
                  <span key={index} className="skill">
                    {item}
                  </span>
                ))}
              </div>
            </AccordionBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionHeader targetId="5">Additional Skills</AccordionHeader>
            <AccordionBody accordionId="5">
              <div className="skills-container">
                {job.jobDescription.additionalSkills.map((item, index) => (
                  <span key={index} className="skill">
                    {item}
                  </span>
                ))}
              </div>
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default JobDescription;
