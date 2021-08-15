import { Typography, TextField, InputAdornment, Input, InputLabel, FormControl } from "@material-ui/core";
import { useForm } from 'react-hook-form'
import ActionButtons from "../../components/ActionButtons";
import useStyles  from "../../styles/form"; 
import "./styles.css"

export default function AddProduct(){
    const { register, handleSubmit, formState: { errors }, setError } = useForm();
    const styles = useStyles();

    const handleAddProduct = (data) => {
        console.log(data);
    }

    return(
        <>
        <Typography variant="h4" component="h2"> Adicionar produto </Typography>
        <form className={styles.column} >
            <TextField  
                {...register("nome", {required: true})}
                label="Nome do produto" 
            />
            <div className="row">
                <FormControl>
                    <InputLabel htmlFor="preco">
                        Preço
                    </InputLabel>
                    
                    <Input 
                        id="preco"
                        type="number"
                        {...register("preco", {required: true}, {valueAsNumber: true})}
                        startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                    />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="estoque">
                        Estoque
                    </InputLabel>
                    
                    <Input 
                        id="estoque"
                        type="number"
                        {...register("estoque", {required: true}, {valueAsNumber: true})}
                        startAdornment={<InputAdornment position="start">Un</InputAdornment>}
                    />
                </FormControl>
            </div>
            <TextField 
                {...register("descricao", {required: true})}
                label="Descrição do produto"
            />
            <TextField 
                {...register("imagem")}
                label="Imagem"
            />
            <ActionButtons onSubmit={handleSubmit(handleAddProduct)}/>
        </form> 
        </>
    );
}