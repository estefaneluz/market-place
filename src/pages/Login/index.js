import useStyles from "../../styles/form";
import { TextField, Typography, Button } from '@material-ui/core';
import Password from "../../components/Password";

export default function Login(){
    const styles = useStyles();

    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <Typography variant="h4" component="h2">
                    Login
                </Typography>
                <TextField 
                    label="E-mail" 
                />
                <Password id="senha" label="Senha" />
                <div className={styles.action}>
                    <Button variant="contained" color="primary">
                        Entrar
                    </Button>
                    <p>Primeira vez aqui? <a href="#">Crie uma conta</a></p>
                </div>
            </form>
        </div>
    );
}