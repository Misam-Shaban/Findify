import { Link } from "react-router-dom";

function Jobcard({
  id,
  logo,
  company,
  title,
  tags,
  price,
  location,
  postedDays,
}) {
  return (
    <>
      <div className="logo-div">
        <img src={logo} alt="logo" className="logo-img" />
        <button className="save-btn">Save</button>
      </div>
      <div className="content-main-div">
        <div className="company-name">
          <h3>{company}</h3>
          <span className="job-day">{postedDays}</span>
        </div>

        <h4 className="job-title">{title}</h4>

        <div className="job-type">
          <div className="tag">{tags[0]}</div>
          <div className="tag">{tags[1]}</div>
        </div>
      </div>

      <hr className="divider" />

      <div className="pay-div">
        <div className="price-location">
          <div className="price">{price}</div>
          <div className="location">{location}</div>
        </div>
        <Link to={`/job/${id}`} className="apply-btn">
          Apply now
        </Link>
      </div>
    </>
  );
}

export default Jobcard;
