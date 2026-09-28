import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddJob() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    company: "",
    title: "",
    price: "",
    location: "",
    postedDays: "Just now",
    logo: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://job-cards-with-react-production.up.railway.app/api/jobs",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
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

  return (
    <div className="add-job-page">
      <h2>Add New Job</h2>
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

        <button type="submit">Add Job</button>
      </form>
    </div>
  );
}

export default AddJob;
