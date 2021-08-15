import { Typography, TextField, InputAdornment, Input, InputLabel, FormControl } from "@material-ui/core";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import ActionButtons from "../../components/ActionButtons";
import useStyles  from "../../styles/form"; 
import "./styles.css"

export default function EditProduct(){
    const [product, setProduct] = useState({});
    const { setLoading, token } = useContext(AuthContext); 
    const { id } = useParams("/produtos/:id/editar");
    const styles = useStyles();

    const { register, handleSubmit, formState: { errors }, setError } = useForm({
        defaultValues: product
    });

    useEffect(()=>{
        const getProduct = async () => {           
            setLoading(true);
            const request = await fetch(`https://desafio-m03.herokuapp.com/produtos/${id}`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            setLoading(false);

            const response = await request.json();
            setProduct(response);
        }

        getProduct();
    }, []);

    const editProduct = async (data) => {
        console.log(data);
    }

    return(
        <>
        <Typography variant="h4" component="h2"> Editar produto </Typography>
        <div className="row">
            {!!product.nome &&
            <form className={styles.column} >
                <TextField  
                    label="Nome do produto" 
                    defaultValue={product.nome}
                    {...register("nome", {required: true})}
                    error={!!errors.nome}
                />
                <div className="row">
                    <FormControl>
                        <InputLabel error={!!errors.preco} htmlFor="preco">
                            Preço
                        </InputLabel>
                        
                        <Input 
                            type="number"
                            id="preco"
                            startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                            defaultValue={(product.preco/100)}
                            {...register("preco", {required: true}, {valueAsNumber: true})}
                            error={!!errors.preco}
                        />
                    </FormControl>
                    <FormControl>
                        <InputLabel error={!!errors.estoque} htmlFor="estoque">
                            Estoque
                        </InputLabel>
                        
                        <Input 
                            type="number"
                            id="estoque"
                            startAdornment={<InputAdornment position="start">Un</InputAdornment>}
                            defaultValue={product.estoque}
                            {...register("estoque", {required: true}, {valueAsNumber: true})}
                            error={!!errors.estoque}
                        />
                    </FormControl>
                </div>
                <TextField 
                    label="Descrição do produto"
                    defaultValue={product.descricao}
                    {...register("descricao", {required: true})}
                    error={!!errors.descricao}
                />
                <TextField 
                    label="Imagem"
                    defaultValue={product.imagem}
                    {...register("imagem")}
                    error={!!errors.imagem}
                />
                <ActionButtons onSubmit={handleSubmit(editProduct)}/>
            </form>}
            <img 
            className="img-product"
            src={product.imagem}/>
        </div> 
        </>
    );
}