import { Typography, TextField } from "@material-ui/core";
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from "../../contexts/AuthContext";
import useStyles from "../../styles/form";
import Password from "../../components/Password";
import ActionButtons from "../../components/ActionButtons";

export default function EditProfile(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { token, setLoading, user } = useContext(AuthContext);

    const styles = useStyles();

    const updateUser = (data) => {
        console.log(data);
    }
    
    return (
        <>
        <Typography variant="h4" component="h2"> Editar Perfil </Typography>
        <form className={styles.column} >
            <TextField  
                {...register("nome", {required: true})}
                label="Seu nome" 
                defaultValue={user.nome}
            />
            <TextField 
                {...register("nome_loja", {required: true})}
                label="Nome da loja"
                defaultValue={user.nome_loja}
            />
            <TextField 
                {...register("email", {required: true})}
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