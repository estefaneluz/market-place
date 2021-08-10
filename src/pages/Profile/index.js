import { Typography, TextField } from "@material-ui/core";
import useStyles  from "../../styles/form"; 

export default function Profile(){
    const styles = useStyles();
    return (
        <>
        <Typography variant="h4" component="h2"> Perfil </Typography>
        <form className={styles.column}>
            <TextField  disabled
                label="Seu nome" 
            />
            <TextField disabled
                label="Nome da loja" 
            />
            <TextField disabled
                label="E-mail"
                type="email" 
            />
        </form>
        </>
    );
}