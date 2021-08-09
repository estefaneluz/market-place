import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import Login from "./pages/Login";
import Register from "./pages/Register";

const ProtectedRoutes = (props) => {
  const { token } = useContext(AuthContext);
  return (
    <Route render={()=> token ? props.children : <Redirect to="/" />} />
  );
}

export default function Routes() {
  const [token, setToken] = useState('');
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/cadastro"  component={Register}/>

          <ProtectedRoutes>
            <Route path="/produtos"/>
          </ProtectedRoutes>
        </Switch>
      </Router>
    </AuthContext.Provider> 
  );
}