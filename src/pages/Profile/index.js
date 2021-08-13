import { Typography, TextField } from "@material-ui/core";
import { useState, useEffect, useContext } from "react";
import ActionButtons from "../../components/ActionButtons";
import { AuthContext } from "../../contexts/AuthContext";
import useStyles  from "../../styles/form"; 

export default function Profile(){
    const [user, setUser] = useState({});
    const { token, setLoading } = useContext(AuthContext);
    const styles = useStyles();

    const getUserData = async () =>{
        setLoading(true);

        const request = await fetch('https://desafio-m03.herokuapp.com/perfil/', {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        setLoading(false);
        
        const response = await request.json();
        return setUser(response);
    }

    useEffect(()=> {
        getUserData();
    }, [])

    return (
        <>
        <Typography variant="h4" component="h2"> Perfil </Typography>
        { user.nome && 
        <form className={styles.column}>
            <TextField  disabled
                label="Seu nome" 
                defaultValue={user.nome}
            />
            <TextField disabled
                label="Nome da loja"
                defaultValue={user.nome_loja} 
            />
            <TextField disabled
                label="E-mail"
                type="email" 
                defaultValue={user.email}
            />
            <ActionButtons/>
        </form> }
        </>
    );
}