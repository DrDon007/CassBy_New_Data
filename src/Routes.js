import SignUp from "./Components/Feature/SignUp";
import Login from "./Components/Feature/Login";
import Home from "./Components/Feature/Organization";
import Dashboard from "./Components/Feature/Dashboard";
import Organization from "./Components/Feature/Organization";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AuthService from "./Services/auth.service";

export default function Routes() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/organization">
            <Organization />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        AuthService.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
