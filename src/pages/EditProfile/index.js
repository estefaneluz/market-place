import { Typography, TextField } from "@material-ui/core";
import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from "../../contexts/AuthContext";
import { useHistory } from 'react-router-dom';
import useStyles from "../../styles/form";
import Password from "../../components/Password";
import ActionButtons from "../../components/ActionButtons";

export default function EditProfile(){
    const { token, setLoading, user, setErrorMessage } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }, setError } = useForm({
        defaultValues: user
    });
    const history = useHistory();

    const styles = useStyles();

    const updateUser = async (data) => {
        if(data.senha !== data.repetir_senha){
            setError("senha", {type: "validate"}, {shouldFocus: true});
            setError("repetir_senha", {type:"validate"}, {shouldFocus: false});
            setErrorMessage("As senhas devem ser iguais!");
            return;
        }

        if(!data.nome) data.nome = user.nome; 
        if(!data.nome_loja) data.nome_loja = user.nome_loja;
        if(!data.email) data.email = user.email

        setErrorMessage('');
        setLoading(true);
        const request = await fetch('https://desafio-m03.herokuapp.com/perfil', {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        setLoading(false);
        if(request.ok) {
            return history.push('/perfil'); 
        }
        const response = await request.json();
        return setErrorMessage(response);
    }
    
    return (
        <>
        <Typography variant="h4" component="h2"> Editar Perfil </Typography>
        <form className={styles.column} >
            <TextField  
                {...register("nome", {required: true})}
                error={!!errors.nome}
                label="Seu nome" 
                defaultValue={user.nome}
            />
            <TextField 
                {...register("nome_loja", {required: true})}
                error={!!errors.nome_loja}
                label="Nome da loja"
                defaultValue={user.nome_loja}
            />
            <TextField 
                {...register("email", {required: true})}
                error={!!errors.email}
                label="E-mail"
                type="email" 
                defaultValue={user.email}
            />
            <Password
                register={() => register("senha", {required: true})}
                error={!!errors.senha}
                id="senha" label="Nova senha"
            />
            <Password
                register={() => register("repetir_senha", {required: true})}
                error={!!errors.senha}
                id="repetir_senha" label="Repita a nova senha"
            />
            <ActionButtons onSubmit={handleSubmit(updateUser)}/>
        </form>
        </>
    );
}