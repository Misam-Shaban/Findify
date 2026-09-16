import Jobcard from "./Jobcard";
import JobCardData from "./Jobdata.json"

function App() {

  return (
    <>
      <div className="showCard">
        {JobCardData.map(function (elem, id) {
          return (
            <div key={id}>
              <Jobcard
                logo={elem.logo}
                company={elem.company}
                postedDays={elem.postedDays}
                title={elem.title}
                tags={elem.tags}
                price={elem.price}
                location={elem.location}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
