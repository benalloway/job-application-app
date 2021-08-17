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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/applicationForm">Application Form</Link>
          </li>
          <li>
            <Link to="/applicationsList">Applications List</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/applicationForm">
            <ApplicationForm />
          </Route>
          <Route path="/applicationsList">
            <ApplicationsList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function ApplicationForm() {
  function handleSubmit(formData) {
    postJobApplication(JSON.stringify(formData))
    console.log(formData)
  }
  return (
      <JobApplicationForm onSubmit={handleSubmit} />
  );
}

function ApplicationsList() {
  const [applications, setApplications] = React.useState(null)
  
  React.useEffect(()=>{
    getJobApplications().then(r => {
      setApplications(r.data)
    })
    
  })

  if(!applications) return null
  else {
    return (
      <div>
        <h2>Accepted Applications from: </h2>
        <ul>
          {applications.map(a => {
            return (
              <li>
              <h3>{a.Name}</h3>
            </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default App;
