import { TextField, Typography, Button } from '@material-ui/core';
import { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext';
import { Alert } from '@material-ui/lab';
import { useForm } from 'react-hook-form'
import useStyles from "../../styles/form";
import Password from "../../components/Password";

export default function Login(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState('');
    const { setToken, setLoading } = useContext(AuthContext);
    const history = useHistory();
    const styles = useStyles();

    const login = async (data) => {
        setError('');
        setLoading(true);

        const request = await fetch('https://desafio-m03.herokuapp.com/login', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
        });
    
        setLoading(false)
        const response = await request.json();

        if(request.ok){
            setToken(response.token);
            return history.push("/produtos");
        }

        return setError(response);
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
                    <p>Primeira vez aqui? <Link to="/cadastro" 
                        className={styles.link}>Crie uma conta</Link></p>
                </div>
            </form>
        </div>
    );
}