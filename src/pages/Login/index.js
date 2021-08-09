import { TextField, Typography, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import useStyles from "../../styles/form";
import Password from "../../components/Password";

export default function Login(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const styles = useStyles();

    const Login = (data) => {
        console.log(data)
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit(Login)}>
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
                <div className={styles.action}>
                    <Button type="submit" variant="contained" color="primary">
                        Entrar
                    </Button>
                    <p>Primeira vez aqui? <Link to="/cadastro">Crie uma conta</Link></p>
                </div>
            </form>
        </div>
    );
}