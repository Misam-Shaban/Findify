import { BrowserRouter, Routes, Route } from "react-router-dom";
import Jobcard from "./Jobcard";
import JobCardData from "./Jobdata.json";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <div className="showCard">
              {JobCardData.map(function (elem) {
                return (
                  <div key={elem.id}>
                    <Jobcard
                      id={elem.id}
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
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;