import { Typography, TextField, InputAdornment, Input, InputLabel, FormControl } from "@material-ui/core";
import ActionButtons from "../../components/ActionButtons";
import useStyles  from "../../styles/form"; 
import "./styles.css"

export default function AddProduct(){
    const styles = useStyles();
    return(
        <>
        <Typography variant="h4" component="h2"> Adicionar produto </Typography>
        <form className={styles.column} >
            <TextField  
                label="Nome do produto" 
            />
            <div className="row">
                <FormControl>
                    <InputLabel htmlFor="preco">
                        Preço
                    </InputLabel>
                    
                    <Input 
                        id="preco"
                        startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                    />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="estoque">
                        Estoque
                    </InputLabel>
                    
                    <Input 
                        id="estoque"
                        startAdornment={<InputAdornment position="start">Un</InputAdornment>}
                    />
                </FormControl>
            </div>
            <TextField 
                label="Descrição do produto"
            />
            <TextField 
                label="Imagem"
            />
            <ActionButtons/>
        </form> 
        </>
    );
}