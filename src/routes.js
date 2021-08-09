import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Backdrop, CircularProgress } from "@material-ui/core"
import { useState, useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { useStyles } from "./styles/routesStyles";
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
  const [loading, setLoading] = useState(false);
  const valueContext = { token, setToken, loading, setLoading }
  const classes = useStyles();
  
  return (
    <AuthContext.Provider value={valueContext}>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/cadastro"  component={Register}/>

          <ProtectedRoutes>
            <Route path="/produtos"/>
          </ProtectedRoutes>
        </Switch>

        <Backdrop className={classes.backdrop} open={loading} onClick={()=>setLoading(false)}>
              <CircularProgress color="inherit" />
        </Backdrop>
      </Router>
    </AuthContext.Provider> 
  );
}