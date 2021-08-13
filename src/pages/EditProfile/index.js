import { Typography, TextField } from "@material-ui/core";
import { useForm } from 'react-hook-form'
import useStyles from "../../styles/form";
import Password from "../../components/Password";
import ActionButtons from "../../components/ActionButtons";

export default function EditProfile(){
    const { register, handleSubmit, formState: { errors } } = useForm();

    const styles = useStyles();

    const obSubmit = (data) => {
        console.log(data);
    }
    return (
        <>
        <Typography variant="h4" component="h2"> Editar Perfil </Typography>
        <form className={styles.column} onSubmit={() => handleSubmit(onsubmit)}>
            <TextField  
                label="Seu nome" 
            />
            <TextField 
                label="Nome da loja"
            />
            <TextField 
                label="E-mail"
                type="email" 
            />
            <Password
                register={() => register("senha")}
                error={!!errors.senha}
                id="senha" label="Nova senha"
            />
            <Password
                register={() => register("repetir_senha")}
                error={!!errors.senha}
                id="repetir_senha" label="Repita a nova senha"
            />
            <ActionButtons/>
        </form>
        </>
    );
}