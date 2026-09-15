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
      logo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
      company: "Amazon",
      postedDays: "3 days ago",
      title: "Backend Engineer",
      tags: ["Contract", "Senior Level"],
      price: "$95/hr",
      location: "Islamabad",
    },
    {
      id: 4,
      logo: "https://static.vecteezy.com/system/resources/previews/017/396/804/non_2x/netflix-mobile-application-logo-free-png.png",
      company: "Netflix",
      postedDays: "2 weeks ago",
      title: "Frontend Developer",
      tags: ["Remote", "Mid Level"],
      price: "$70/hr",
      location: "Karachi, Sindh",
    },
    {
      id: 5,
      logo: "data:image/png;base64,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",
      company: "Meta",
      postedDays: "6 hours ago",
      title: "Product Designer",
      tags: ["Full Time", "Senior Level"],
      price: "$150/hr",
      location: "Lahore, Punjab",
    },
    {
      id: 6,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrcm6kBTr77zswnurr7OiVSUi2khuwV0YZ05YcLww3OA&s=10",
      company: "Apple",
      postedDays: "4 days ago",
      title: "iOS Developer",
      tags: ["Part Time", "Senior Level"],
      price: "$130/hr",
      location: "Rawalpindi",
    },
    {
      id: 7,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtniZHHBjfHBrIt9Soo5Hqb3JSRywWzH3wCWGXfKbPSQ&s=10",
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
      logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAABzc3NTU1NPT08KCgpLS0tdXV15eXnGxsbi4uLe3t6Li4sfHx9tbW38/Pzy8vJBQUGcnJyoqKjR0dEmJia9vb3p6emFhYXW1tb29vbFxcWysrIaGhpXV1eenp40NDQ8PDxjY2OSkpIvLy8cHBy3t7d/f3+jLDQPAAAHlElEQVR4nO2diZKiMBCGQUYQdQQVwZPT0fd/wzWLMSEkqDNAsKu/qq3amnDkJ5DudDrRMBAEQRAEQRAEQRAEQRAEQRAteLor0DZeNN0F4brYTkZ57sSWZVtW7OT5YrIt1mGwm0YfK3m/c4/b3E5/zGZ+Ujvfrt2Zr7vC7zANC+c8fqJMZHx2inCmu+pP8WbHbfqmtCrp9Tgb6nvrB6v8T+IYzioY2kvrB4XTkjpKXLiDUTk75puW5ZV85+sBfJhBkb1Q183SuZmHebFarZLbv2K+vS6c5SvPJZsHWuVtT43VSxc3m7drsHj7aHezlYvmzmm81SRyt21os7g4vtVZ+MFlHje06XbXdwc7XWWqdssTd/rLq0ZukqvaM1399qq/YH9RdJz2NZyKz9rzI3XVppFfO34aXm355Z3LvnUtinrJbn++hpUPzpsG4Wrk2NnmZK4UF1qZp01mO5NVGFSejBeF17PsJr11rbUmtBO+hpG7HmXffPlBehmXP+R7OVq7ESv0ZsmXeJuvjnUpqmbGR9aneEGSyzxS2YsqexXGeRKwZ7U/xpVS+YPqBPZ0LSbPdwvFB3R7h+sdqy99Dwk25874R4v9vcf+9FDeMkto29zeqWanNK/1KM3HO8nDAZ8mWfm3sD+BhkEe7IS+T14wXzZWlzAXrjB/esZyzm4wMfv8Cgnud0J7hd38tfHSsXKB40vnpPPd/Xg/2bi9KqT4yevDQd732r18VproHGK47w0ImS2I3jpvockv9Y/ZW/W8dUzUJfGef7bCmUcdDVmzx89Z3E8dvX9qv91MyeufEqN031a/OHP3pDad8Fp3WIWYtMMvzjs+rU0nJOoanVIrH12323kmFMxqztrXbcA/WeT2uWE0rXLdO0f2utlFuNurD/mJxHEu1zz+LpT6DtoEGsZaqEq6joQjLuqGuSMa8mgtOqzrvuTIcCuv1rzuGj/vj+p2YF/x6E56fJkHETe+SSTl+6cKZVflvnBLfCv651GbhbT42fxFJj1rQYs1foIM2ozyEIOlknZnIj1rVhbG+huw5LBUNobREHNsaqSMXLHHMf0zvIttbuVFYncrohjWbk37Mqw5KO+g6PLcJwoVoUbXHZa+Bp4NlPoKgXaH1yww/ZimUtM8ysp1V68FmgeDYoDqEykaFWr1OVsibFSodf6zJWaNCofitPyFRnOxGUw2wh/wsgaFlu7atUJTUHWku3KtcG1QOIjB0Z9pisn1Op3UGUGDwgFkBLWAdNq/5ATBWBjGXjnZa2YA/G6Ccu7bjHVXrSUWSoWKuMDHoZ6J0TQd0Tpq31tzsLc11HHvHlPVOsVXRYV/gHSlhqFKq1SEWD+QWKFQPg/wiaiyg2RTOZ+JyveG4XcTVL43DL+b4CsUgulKDUMucKy7Wi2SSRXCCNKUTKQKIcS7KfLMGwjxborc94bidxPkgQwI0WCKfBIRkLEwDFmoxtZdqVaRBTLkeSafimwSEUa8myLzveH43QRZIANKCKNE5ntDMhaGsa8HMrLPz6SpUF+TCSHPhKc+iQgl3k2p+96Q/G5CPYEPQp4JT933hmUsbubiWxAoWVX64YgJfJBCGCWi7w0jz4RH9L1h+d0EMZAxoCz1lhDj3lqW23VKVJ1EBJJnwuNVAxmp7vp0QNVcQMkz4an63tD8bkJ18QyUPBOe6vJfSPFuStX3huZ3EzzeXECaOmTwO2jAyTPh4X1vOHkmPHwCH5w8Ex5+4TqseDeFj3vDyTPh4ScRQU0dMpi5gGks+AQ+R3dVOoIl8EHKM+Fhvje0eDeFBTKgxbspbBIRXDT4zsP3HgM1FmzxDKw8Ex6awAcrz4SH+t7w4t0UGveG6XcTaCADYgijhJoLqMbisSPkEqyxoAvXoeWZ8JSbRkGMd1PKBD6I8W5KANrvJkyBG4v7wvUzsJS9KmQHPh0b5vYH2TQKZrybkoD2uwkH0H43gcS94eWZ8PgncwzX7/5Pap51V6FjHJB5JjxzsPFuyhG0300IQOaZ8EQg9hFsRLp/NyigTh0yYPtsBMBxNgRBEARBEARBEARBEKQ9dotRnQWN00eSQpYddBhNBEaXR+F1MpJH+9f1O+ZdTkDupftWP7JH6hsJcVn5kp+YY2knY1WmlGT72nGnuRyy/XKZiNqvqPJZCXWF3LYK38o1GPUt6ztOOJrm5vhG+TDJf2z+hvvr/z/eMTf8ugqicMP4HvGJQ2qFRphVrpn3lG9EkpvenES6KVRP/zYo1MTMfHvvjnVTNtQwFdbaUBqwf/yRKFSG9D9EYWTXYV3NTeH4q4LNDIRSYWTzZ1hxHFtOL1MfUoWyPTzZVJPEWrDsKKVCye61/ay4kSvc135RhjNyrSk8aVRoGEnlNXT4zii0nAqnlxWmS8ZGt8I3yF5WyFvc1eco9F5XyN/ogxTW2rCQHjUshTdr8SVg82srZpN7uU2+qLGgMBstOPK7wzcshTJrwQZIkl8qqSgUuH98WhXWvTZ/Kdbzygolvx7AFJ7EIvpVigqLvuzhNI6/JKOYfWHxOFwLBktLhPNpHKHoURLZVmX0sratoWbkYJYJgiAIgiAIgiAIgiAIgiCIZv4BHWJfjP6B5ngAAAAASUVORK5CYII=",
      company: "Tesla",
      postedDays: "12 hours ago",
      title: "Embedded Systems Engineer",
      tags: ["On-site", "Senior Level"],
      price: "$110/hr",
      location: "Sialkot, Punjab",
    },
    {
      id: 10,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFTZFHp00dTOMWullEHT9QM8k7VziJRnwaYfvTvTrSWA&s=10",
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
        {jobsData.map(function (elem, id) {
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
