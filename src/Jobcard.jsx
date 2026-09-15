import React from 'react'

function Jobcard() {
  return (
    <>
      <div className='main-div'>
        <div className="logo-div">
            <img src="https://blog.logomyway.com/wp-content/uploads/2021/01/google-symbol.jpg" alt="logo" />
            <button>save </button>
        </div>
        <div className='company-name'>
            <h3>Google</h3>
            <div className='job-day'>
                5 Day Ago
            </div>
        </div>
        <div className="job-title">
            Full Stack Developer
        </div>
        <div className="job-type">
            <div>Part Time</div>
            <div>Senior Level</div>
        </div>
        <div className="pay-div">
           <div>
             $120/hr
           </div>
           <div className="location">Panjab,Lahore</div>
           <div><button>Apply Now</button></div>

        </div>
      </div>
    </>
  )
}

export default Jobcard;
