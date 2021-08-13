import { Typography, TextField } from "@material-ui/core";
import { useState, useEffect, useContext } from "react";
import ActionButtons from "../../components/ActionButtons";
import { AuthContext } from "../../contexts/AuthContext";
import { getUserData } from "../../functions/getUserData";
import useStyles  from "../../styles/form"; 

export default function Profile(){
    const { token, setLoading, setUser, user } = useContext(AuthContext);
    const styles = useStyles();

    useEffect(()=> {
        getUserData(setLoading, setUser, token);
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