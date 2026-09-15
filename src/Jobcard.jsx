

function Jobcard(props) {
  return (
    <div className='main-div'>
      <div className="logo-div">
        <img src={props.logo} alt="logo" className="logo-img" />
        <button className="save-btn">Save </button>
      </div>
      <div className="content-main-div">
  <div className='company-name'>
        <h3>{props.company}</h3>
        <span className='job-day'>{props.postedDays}</span>
      </div>

      <h4 className="job-title">{props.title}</h4>

      <div className="job-type">
        <div className="tag">{props.tags[0]}</div>
        <div className="tag">{props.tags[1]}</div>
      </div>
      </div>
    

      <hr className="divider" />

      <div className="pay-div">
        <div className="price-location">
          <div className="price">{props.price}</div>
          <div className="location">{props.location}</div>
        </div>
        <button className="apply-btn">Apply now</button>
      </div>
    </div>
  )
}

export default Jobcard;