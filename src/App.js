import * as React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from "./components/Header";
import DashboardScreen from "./screens/DashboardScreen"
import SubmitAnApplicationScreen from "./screens/SubmitAnApplicationScreen"
import AcceptedApplicationsScreen from "./screens/AcceptedApplicationsScreen"

const navigation = [
  { name: 'Dashboard', href: '/' },
  { name: 'Apply Now!', href: '/apply-now' },
  { name: 'Accepted Applications', href: '/applications-list' },
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
          <Route path="/apply-now">
            <SubmitAnApplicationScreen />
          </Route>
          <Route path="/applications-list">
            <AcceptedApplicationsScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
