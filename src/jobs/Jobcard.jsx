import { useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

function Jobcard({
  id,
  company,
  title,
  tags = [],
  price,
  location,
  isActive,
  onDelete,
}) {
  const navigate = useNavigate();

  const handleSelect = () => navigate(`/jobs/${id}`);
  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete?.();
  };

  return (
    <article
      className={`job-card${isActive ? " job-card--active" : ""}`}
      onClick={handleSelect}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleSelect()}
    >
      <h3 className="job-card-title">{title}</h3>
      <p className="job-card-company">{company}</p>
      <p className="job-card-location">{location}</p>

      <div className="job-card-meta">
        {price && <span className="meta-pill">{price}</span>}
        {tags.slice(0, 2).map((tag, i) => (
          <span key={i} className="meta-pill">
            {tag}
          </span>
        ))}
      </div>

      <button
        className="delete-icon-btn"
        onClick={handleDelete}
        aria-label="Delete job"
        title="Delete job"
      >
        <FaTrashAlt />
      </button>
    </article>
  );
}

export default Jobcard;
