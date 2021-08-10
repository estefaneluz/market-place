import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Backdrop, CircularProgress, Typography } from "@material-ui/core"
import { useState, useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { useStyles } from "./styles/routesStyles";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import SideNav from "./components/SideNav";
import ActionButtons from "./components/ActionButtons";

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
  const styles = useStyles();
  
  return (
    <AuthContext.Provider value={valueContext}>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/cadastro"  component={Register}/>

          <ProtectedRoutes>
            <div className={styles.wrapper}>
              <SideNav/>
              <main className={styles.content}>
                <Typography variant="h2" component="h1">Loja da Maria</Typography>
                <Route path="/produtos"/>
                <Route path="/perfil" component={Profile}/>
                <ActionButtons/>
              </main>
            </div>
          </ProtectedRoutes>
        </Switch>

        <Backdrop className={styles.backdrop} open={loading} onClick={()=>setLoading(false)}>
              <CircularProgress color="inherit" />
        </Backdrop>
      </Router>
    </AuthContext.Provider> 
  );
}