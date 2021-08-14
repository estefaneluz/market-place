import { Button } from "@material-ui/core"
import { Link, useLocation, useHistory } from "react-router-dom"
import useStyles from "../../styles/form"
import "./styles.css"

export default function ActionButtons({onSubmit}){
    const styles = useStyles();
    const history = useHistory();
    const { pathname } = useLocation();
    const link = pathname.includes("produtos") ? "/produtos" : "/perfil"
    const submitButtonCondition = (pathname.includes("/novo") || pathname.includes("/editar")); 

    const defineRoute = (e) => {
        e.preventDefault();
        if(submitButtonCondition) 
           return onSubmit(); 
        else if (pathname === "/perfil") 
            return history.push("/perfil/editar");
        else if (pathname === "/produtos") 
            return history.push("/produtos/novo");
    }

    return(
    <div className="actionButtons">
        <hr/>
        <div className="row">
            { submitButtonCondition
            && <Link to={link} className={styles.link}>Cancelar</Link> }
            <Button 
                type = {submitButtonCondition ? "submit" : "button"}
                onClick={(e) => defineRoute(e)}
                className={styles.button}
                variant="contained" 
                color="primary">
                {pathname.includes("produto") ? "Adicionar Produto" : "Editar perfil"}
            </Button>
        </div>
    </div>);
}