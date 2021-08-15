import { Typography, TextField, InputAdornment, Input, InputLabel, FormControl } from "@material-ui/core";
import { useForm } from 'react-hook-form'
import ActionButtons from "../../components/ActionButtons";
import useStyles  from "../../styles/form"; 
import "./styles.css"

export default function AddProduct(){
    const { register, handleSubmit, formState: { errors }, setError } = useForm();
    const styles = useStyles();

    const handleAddProduct = (data) => {
        if(data.estoque.includes(".") || data.estoque.includes(",")){
            setError("estoque", {type: "validate"}, {shouldFocus: true}); 
            //colocar aqui um estado de error com a mensagem "O estoque precisa ser um numero inteiro."
            return; 
        }
        data.preco = data.preco * 100;
        
    }

    return(
        <>
        <Typography variant="h4" component="h2"> Adicionar produto </Typography>
        <form className={styles.column} >
            <TextField  
                error={!!errors.nome}
                {...register("nome", {required: true})}
                label="Nome do produto" 
            />
            <div className="row">
                <FormControl>
                    <InputLabel error={!!errors.preco} htmlFor="preco">
                        Preço
                    </InputLabel>
                    
                    <Input 
                        id="preco"
                        type="number"
                        error={!!errors.preco}
                        {...register("preco", {required: true}, {valueAsNumber: true})}
                        startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                    />
                </FormControl>
                <FormControl>
                    <InputLabel error={!!errors.estoque} htmlFor="estoque">
                        Estoque
                    </InputLabel>
                    
                    <Input 
                        id="estoque"
                        type="number"
                        error={!!errors.estoque}
                        {...register("estoque", {required: true}, {valueAsNumber: true})}
                        startAdornment={<InputAdornment position="start">Un</InputAdornment>}
                    />
                </FormControl>
            </div>
            <TextField 
                error={!!errors.descricao}
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