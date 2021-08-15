import { useState, useEffect } from "react"
import { Button } from "@material-ui/core"
import { Link, useLocation, useHistory } from "react-router-dom"
import useStyles from "../../styles/form"
import "./styles.css"

export default function ActionButtons({onSubmit}){
    const [nameButton, setNameButton] = useState('');
    const styles = useStyles();
    const history = useHistory();
    const { pathname } = useLocation();
    
    const link = pathname.includes("produtos") ? "/produtos" : "/perfil"
    const submitButtonCondition = (pathname.includes("/novo") || pathname.includes("/editar")); 

    useEffect(()=>{
        setNameButton(()=>{
            if(pathname.includes("editar")) return "Salvar Alterações"
            else if(pathname.includes("produtos")) return "Adicionar Produto"
            else if(pathname.includes("perfil")) return "Editar perfil"
        })
    }, [pathname])

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
                {nameButton}
            </Button>
        </div>
    </div>);
}