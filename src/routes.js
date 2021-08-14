import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Backdrop, CircularProgress, Typography } from "@material-ui/core"
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { useStyles } from "./styles/routesStyles";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import SideNav from "./components/SideNav";
import EditProfile from "./pages/EditProfile";
import Products from "./pages/Products";
import { getUserData } from "./functions/getUserData";

const ProtectedRoutes = (props) => {
  const { token } = useContext(AuthContext);
  return (
    <Route render={()=> token ? props.children : <Redirect to="/" />} />
  );
}

export default function Routes() {
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const valueContext = { token, setToken, loading, setLoading, user, setUser }
  const styles = useStyles();

  useEffect(() => {
    async function awaitGetUser(){
      await getUserData(setLoading, setUser, token);
    }
    
    awaitGetUser();
  }, [token]);
  
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
                <Typography variant="h2" component="h1">{user.nome_loja}</Typography>
                <Route path="/produtos" component={Products}/>
                <Route path="/perfil" exact component={Profile}/>
                <Route path="/perfil/editar" component={EditProfile}/>
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