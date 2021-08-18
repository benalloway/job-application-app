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
      <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Accepted Applications from: </h2>
        <ul className="divide-y divide-gray-200">
        {applications.map((app) => (
          <li
            key={app.Id}
            className="relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
          >
            <div className="flex justify-between space-x-3">
              <div className="min-w-0 flex-1">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-sm font-medium text-gray-900 truncate">{app.name}</p>
              </div>
              {/* <time dateTime={app.datetime} className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">
                {app.datetime}
              </time> */}
            </div>
            <div className="mt-1">
              <ul className="line-clamp-2 text-sm text-gray-600">{app.questions?.map(q => {
                  return (
                      <li key={q.Question}>{q.Question}: <i>{q.Answer ? "Yes" : "No"}</i></li>
                    )
                })}</ul>
            </div>
          </li>
        ))}
      </ul>
      </div>
      </div>
    );
  }
}

export default App;
