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


function App() {

  return (
    <Router>
      <div>
        <Header />

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
