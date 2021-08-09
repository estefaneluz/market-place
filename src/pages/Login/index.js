import { TextField, Typography, Button } from '@material-ui/core';
import { useState } from 'react';
import { Alert } from '@material-ui/lab';
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import useStyles from "../../styles/form";
import Password from "../../components/Password";

export default function Login(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState('');
    const styles = useStyles();

    const login = (data) => {
        console.log(data)
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit(login)}>
                <Typography variant="h4" component="h2">
                    Login
                </Typography>
                <TextField 
                    {...register("email", {required: true})}
                    error={!!errors.email}
                    label="E-mail" 
                    type="email"
                />
                <Password 
                    register={() => register("senha", {required: true})}
                    error={!!errors.senha}
                    id="senha" label="Senha" />
                {!!error && 
                <Alert onClose={() => setError('')} severity="error">
                    {error}
                </Alert>}
                <div className={styles.action}>
                    <Button 
                        className={styles.button}
                        type="submit" 
                        variant="contained" 
                        color="primary">
                        Entrar
                    </Button>
                    <p>Primeira vez aqui? <Link to="/cadastro">Crie uma conta</Link></p>
                </div>
            </form>
        </div>
    );
}