import { Typography, TextField } from "@material-ui/core";
import { useForm } from 'react-hook-form'
import useStyles from "../../styles/form";
import Password from "../../components/Password";
import ActionButtons from "../../components/ActionButtons";

export default function EditProfile(){
    const { register, handleSubmit, formState: { errors } } = useForm();

    const styles = useStyles();

    const onSubmit = (data) => {
        console.log(data);
    }
    
    return (
        <>
        <Typography variant="h4" component="h2"> Editar Perfil </Typography>
        <form className={styles.column} >
            <TextField  
                {...register("nome", {required: true})}
                label="Seu nome" 
            />
            <TextField 
                {...register("nome_loja", {required: true})}
                label="Nome da loja"
            />
            <TextField 
                {...register("email", {required: true})}
                label="E-mail"
                type="email" 
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
            <ActionButtons onSubmit={handleSubmit(onSubmit)}/>
        </form>
        </>
    );
}