import { TextField, Typography, Button, Snackbar } from '@material-ui/core';
import { useState } from 'react';
import { Alert } from '@material-ui/lab';
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import useStyles from "../../styles/form";
import Password from "../../components/Password";

export default function Register(){
    const { register, handleSubmit, formState: { errors }, setError } = useForm();
    const [errorMessage, setErrorMessage] = useState('');
    const styles = useStyles();

    const userRegister = async (data)=> {
        if(data.senha !== data.repetir_senha){

        }
    }

    return (
        <div className={`${styles.container} ${styles.margin}`}>
            <form className={styles.form} onSubmit={handleSubmit(userRegister)}>
                <Typography variant="h4" component="h2">
                    Criar uma conta
                </Typography>
                <TextField 
                    {...register("nome", {required: true})}
                    error={!!errors.nome}
                    label="Seu nome" 
                />
                <TextField 
                    {...register("nome_loja", {required: true})}
                    error={!!errors.nome_loja}
                    label="Nome da loja" 
                />
                <TextField 
                    {...register("email", {required: true})}
                    error={!!errors.email}
                    label="E-mail" 
                    type="email"
                />
                <Password 
                    register={() => register("senha", {required: true})}
                    error={!!errors.senha}
                    id="senha" label="Senha" 
                />
                <Password 
                    register={() => register("repetir_senha", {required: true})}
                    error={!!errors.repetir_senha}
                    id="senha" label="Repita a senha" 
                />
                {!!errorMessage && 
                <Alert onClose={() => setErrorMessage('')} severity="error">
                    {errorMessage}
                </Alert>}
                <div className={styles.action}>
                    <Button
                        className={styles.button} 
                        type="submit" 
                        variant="contained" color="primary">
                        Criar conta
                    </Button>
                    <p>Já possui uma conta? <Link to="/">Acesse</Link></p>
                </div>
            </form>
        </div>
    );
}