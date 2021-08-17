import * as React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import JobApplicationForm from "./components/JobApplicationForm";
import {postJobApplication, getJobApplications} from "./async/snag-application-api"

function App() {

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Qualified Allications</Link>
          </li>
          <li>
            <Link to="/applicationForm">Submit an Application</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/applicationForm">
            <ApplicationForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function ApplicationForm() {
  function handleSubmit(formData) {
    postJobApplication(formData)
  }
  return (
      <JobApplicationForm onSubmit={handleSubmit} />
  );
}

function Home() {
  const [applications, setApplications] = React.useState(null)
  
  React.useEffect(()=>{
    getJobApplications().then(r => {
      setApplications(r.data)
    })
    
  },[])

  if(!applications) return null
  else {
    return (
      <div>
        <h2>Accepted Applications from: </h2>
        <ul>
          {applications.map(a => {
            return (
              <li key={a.Name}>
                <h3>{a.Name}</h3>
                  <div className="flex">
                {a.Questions?.map(q => {
                  return (
                      <p>Question: {q.Question} - Answer: {q.Answer ? "Yes" : "No"}</p>
                    )
                })}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default App;
