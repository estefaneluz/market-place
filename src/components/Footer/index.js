import { Button } from "@material-ui/core"
import { Link, useLocation } from "react-router-dom"
import useStyles from "../../styles/form"
import "./styles.css"

export default function Footer(){
    const styles = useStyles();
    const location = useLocation();
    return(
    <footer className="footer">
        <hr/>
        <div className="row">
            <Link className={styles.link}>Cancelar</Link>
            <Button 
                className={styles.button}
                variant="contained" 
                color="primary">
                {location.pathname ==="/perfil" ? "Editar perfil" : "Adicionar Produto"}
            </Button>
        </div>
    </footer>);
}