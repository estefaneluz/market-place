import { Button } from "@material-ui/core"
import { Link, useLocation, useHistory } from "react-router-dom"
import useStyles from "../../styles/form"
import "./styles.css"

export default function ActionButtons(){
    const styles = useStyles();
    const history = useHistory();
    const { pathname } = useLocation();
    const link = pathname.includes("produtos") ? "/produtos" : "/perfil"

    const defineRoute = () => {
        // if(pathname.includes("/novo"))
        //    return; //add funcao
        // else if (pathname.includes("/editar"))
        //     return; //add funcao
        //else 
        if (pathname === "/perfil") 
            return history.push("/perfil/editar");
        else if (pathname === "/produtos") 
            return history.push("/produtos/novo");
    }

    return(
    <div className="actionButtons">
        <hr/>
        <div className="row">
            { (pathname.includes("novo") || pathname.includes("editar"))
            && <Link to={link} className={styles.link}>Cancelar</Link> }
            <Button 
                type="submit"
                onClick={() => defineRoute()}
                className={styles.button}
                variant="contained" 
                color="primary">
                {pathname.includes("produto") ? "Adicionar Produto" : "Editar perfil"}
            </Button>
        </div>
    </div>);
}