import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const API = "https://job-cards-with-react-production.up.railway.app/api/jobs";
const toArray = (text, sep) =>
  text
    .split(sep)
    .map((t) => t.trim())
    .filter(Boolean);

function EditJob({ job, onCancel, onUpdate }) {
  const [formData, setFormData] = useState({
    mongoId: job._id,
    company: job.company || "",
    title: job.title || "",
    price: job.price || "",
    location: job.location || "",
    logo: job.logo || "",
    jobType: job.tags?.[0] || "Full Time",
    level: job.tags?.[1] || "Mid Level",
    description: job.jobDescription?.description || "",
    detailedLocation: job.jobDescription?.detailedLocation || "",
    aboutJob: job.jobDescription?.aboutJob || "",
    requirements: (job.jobDescription?.requirements || []).join("\n"),
    preferredSkills: (job.jobDescription?.preferredSkills || []).join(", "),
    additionalSkills: (job.jobDescription?.additionalSkills || []).join(", "),
  });

  const [saving, setSaving] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    const updated = {
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
      const res = await fetch(`${API}/${formData.mongoId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      });
      if (res.ok) onUpdate(updated);
    } catch (err) {
      console.log(err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="job-detail edit-panel">
      <div className="edit-header">
        <h2>Edit Job</h2>
        <button className="close-btn" onClick={onCancel} aria-label="Cancel">
          <FaTimes />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="job-form">
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
          placeholder="Location"
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

        <div className="form-actions">
          <button type="button" className="btn-ghost" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className="btn-primary" disabled={saving}>
            {saving ? "Saving..." : "Update Job"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditJob;
