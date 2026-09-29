import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const toArray = (text, separator) =>
  text
    .split(separator)
    .map((item) => item.trim())
    .filter(Boolean);

function EditJob() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(null);

  useEffect(() => {
    fetch(
      `https://job-cards-with-react-production.up.railway.app/api/jobs/${id}`,
    )
      .then((res) => res.json())
      .then((job) => {
        setFormData({
          mongoId: job._id,
          company: job.company,
          title: job.title,
          price: job.price,
          location: job.location,
          logo: job.logo,
          jobType: job.tags[0] || "Full Time",
          level: job.tags[1] || "Mid Level",
          description: job.jobDescription.description,
          detailedLocation: job.jobDescription.detailedLocation,
          aboutJob: job.jobDescription.aboutJob,
          requirements: job.jobDescription.requirements.join("\n"),
          preferredSkills: job.jobDescription.preferredSkills.join(", "),
          additionalSkills: job.jobDescription.additionalSkills.join(", "),
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedJob = {
      logo: formData.logo,
      company: formData.company,
      title: formData.title,
      tags: [formData.jobType, formData.level],
      price: formData.price,
      location: formData.location,
      jobDescription: {
        description: formData.description,
        detailedLocation: formData.detailedLocation,
        aboutJob: formData.aboutJob,
        requirements: toArray(formData.requirements, "\n"),
        preferredSkills: toArray(formData.preferredSkills, ","),
        additionalSkills: toArray(formData.additionalSkills, ","),
      },
    };

    try {
      const response = await fetch(
        `https://job-cards-with-react-production.up.railway.app/api/jobs/${formData.mongoId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedJob),
        },
      );

      if (response.ok) {
        navigate("/");
      } else {
        console.log("Something went wrong");
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (!formData) {
    return (
      <div className="loading-container">
        <p className="loading-text">Loading job details...</p>
      </div>
    );
  }

  return (
    <div className="add-job-page">
      <h2>Edit Job</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="price"
          placeholder="Price (e.g. $100/hr)"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location (e.g. Lahore, Punjab)"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="logo"
          placeholder="Logo URL"
          value={formData.logo}
          onChange={handleChange}
        />

        <select name="jobType" value={formData.jobType} onChange={handleChange}>
          <option>Full Time</option>
          <option>Part Time</option>
          <option>Contract</option>
          <option>Remote</option>
          <option>On-site</option>
        </select>

        <select name="level" value={formData.level} onChange={handleChange}>
          <option>Entry Level</option>
          <option>Mid Level</option>
          <option>Senior Level</option>
        </select>

        <input
          type="text"
          name="detailedLocation"
          placeholder="Detailed Location"
          value={formData.detailedLocation}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Job Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <textarea
          name="aboutJob"
          placeholder="About the Job"
          value={formData.aboutJob}
          onChange={handleChange}
          required
        />
        <textarea
          name="requirements"
          placeholder="Requirements (one per line)"
          value={formData.requirements}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="preferredSkills"
          placeholder="Preferred Skills (comma separated)"
          value={formData.preferredSkills}
          onChange={handleChange}
        />
        <input
          type="text"
          name="additionalSkills"
          placeholder="Additional Skills (comma separated)"
          value={formData.additionalSkills}
          onChange={handleChange}
        />

        <button type="submit">Update Job</button>
      </form>
    </div>
  );
}

export default EditJob;
