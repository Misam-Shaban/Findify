import Jobcard from "./Jobcard";


function App() {



    const jobsData = [
  {
    id: 1,
    logo: "https://blog.logomyway.com/wp-content/uploads/2021/01/google-symbol.jpg",
    company: "Google",
    postedDays: "5 days ago",
    title: "Full Stack Developer",
    tags: ["Part Time", "Senior Level"],
    price: "$120/hr",
    location: "Punjab, Lahore",
  },
  {
    id: 2,
    logo: "https://cdn.worldvectorlogo.com/logos/microsoft-5.svg",
    company: "Microsoft",
    postedDays: "1 day ago",
    title: "UI/UX Designer",
    tags: ["Full Time", "Mid Level"],
    price: "$80/hr",
    location: "Faisalabad, Punjab",
  },
  {
    id: 3,
    logo: "https://cdn.worldvectorlogo.com/logos/amazon-icon-1.svg",
    company: "Amazon",
    postedDays: "3 days ago",
    title: "Backend Engineer",
    tags: ["Contract", "Senior Level"],
    price: "$95/hr",
    location: "Islamabad",
  },
  {
    id: 4,
    logo: "https://cdn.worldvectorlogo.com/logos/netflix-3.svg",
    company: "Netflix",
    postedDays: "2 weeks ago",
    title: "Frontend Developer",
    tags: ["Remote", "Mid Level"],
    price: "$70/hr",
    location: "Karachi, Sindh",
  },
  {
    id: 5,
    logo: "https://cdn.worldvectorlogo.com/logos/meta-1.svg",
    company: "Meta",
    postedDays: "6 hours ago",
    title: "Product Designer",
    tags: ["Full Time", "Senior Level"],
    price: "$150/hr",
    location: "Lahore, Punjab",
  },
  {
    id: 6,
    logo: "https://cdn.worldvectorlogo.com/logos/apple-11.svg",
    company: "Apple",
    postedDays: "4 days ago",
    title: "iOS Developer",
    tags: ["Part Time", "Senior Level"],
    price: "$130/hr",
    location: "Rawalpindi",
  },
  {
    id: 7,
    logo: "https://cdn.worldvectorlogo.com/logos/adobe-2.svg",
    company: "Adobe",
    postedDays: "3 weeks ago",
    title: "Graphic Designer",
    tags: ["Part-Time", "Flexible Schedule"],
    price: "$150-220k",
    location: "Kochi, India",
  },
  {
    id: 8,
    logo: "https://cdn.worldvectorlogo.com/logos/spotify-2.svg",
    company: "Spotify",
    postedDays: "1 week ago",
    title: "Data Analyst",
    tags: ["Full Time", "Entry Level"],
    price: "$60/hr",
    location: "Multan, Punjab",
  },
  {
    id: 9,
    logo: "https://cdn.worldvectorlogo.com/logos/tesla-9.svg",
    company: "Tesla",
    postedDays: "12 hours ago",
    title: "Embedded Systems Engineer",
    tags: ["On-site", "Senior Level"],
    price: "$110/hr",
    location: "Sialkot, Punjab",
  },
  {
    id: 10,
    logo: "https://cdn.worldvectorlogo.com/logos/airbnb.svg",
    company: "Airbnb",
    postedDays: "2 days ago",
    title: "Marketing Manager",
    tags: ["Full Time", "Mid Level"],
    price: "$90/hr",
    location: "Peshawar",
  },
];


  return (
    <>
    <div className="showCard">
      {jobsData.map(function(elem,id){
        return <div key={id}>
          <Jobcard logo={elem.logo} company={elem.company} postedDays={elem.postedDays} title={elem.title}  tags={elem.tags} price={elem.price} location={elem.location}/>
        </div>
      })}
    </div>
    </>
  )
}

export default App;