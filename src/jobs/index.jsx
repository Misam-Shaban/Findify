import JobCardData from "../Jobdata.json";
import Jobcard from "./Jobcard";

const Jobs = () => {
  return (
    <div className="showCard">
      {JobCardData.map(function ({
        id,
        logo,
        company,
        postedDays,
        tags,
        title,
        location,
        price,
      }) {
        return (
          <div key={id} className="main-div">
            <Jobcard
              id={id}
              logo={logo}
              company={company}
              postedDays={postedDays}
              title={title}
              tags={tags}
              price={price}
              location={location}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Jobs;
