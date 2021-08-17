import JobApplicationForm from "./components/JobApplicationForm";
import postJobApplication from "./async/snag-application-api"

function App() {

  // data
  // { Id: "1", Question: "do you own a car?", Answer: "yes" }, 
  // { Id: "2", Question: "do you have a valid license?", Answer: "yes" }, 
  // { Id: "3", Question: "have you ever had a DUI?", Answer: "no" },
  // { Id: "4", Question: "are you willing to drive more than 1000 miles a month?", Answer: "yes" },

  function handleSubmit(formData) {
    postJobApplication(JSON.stringify(formData))
    console.log(formData)
  }

  return (
    <JobApplicationForm onSubmit={handleSubmit} />
  );
}

export default App;
