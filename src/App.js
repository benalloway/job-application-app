import * as React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from "./components/Header";
import DashboardScreen from "./screens/DashboardScreen"
import SubmitAnApplicationScreen from "./screens/SubmitAnApplicationScreen"
import QualifiedApplicationsScreen from "./screens/QualifiedApplicationsScreen"

const navigation = [
  { name: 'Dashboard', href: '/' },
  { name: 'Submit Application', href: '/job-application-form' },
  { name: 'Accepted Applications', href: '/qualified-applications' },
]

function App() {

  return (
    <Router>
      <div>
        <Header navigationElements={navigation} />

        <Switch>
          <Route exact path="/">
            <DashboardScreen />
          </Route>
          <Route path="/job-application-form">
            <SubmitAnApplicationScreen />
          </Route>
          <Route path="/qualified-applications">
            <QualifiedApplicationsScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
