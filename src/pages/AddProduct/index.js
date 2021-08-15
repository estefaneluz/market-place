import { Typography, TextField, InputAdornment, Input, InputLabel, FormControl } from "@material-ui/core";
import { useState, useContext } from 'react';
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import ActionButtons from "../../components/ActionButtons";
import useStyles  from "../../styles/form"; 
import "./styles.css"

export default function AddProduct(){
    const { register, handleSubmit, formState: { errors }, setError } = useForm();
    const { setLoading, token } = useContext(AuthContext); 

    const history = useHistory();
    const styles = useStyles();

    const handleAddProduct = async (data) => {
        if(data.estoque.includes(".") || data.estoque.includes(",")){
            setError("estoque", {type: "validate"}, {shouldFocus: true}); 
            //colocar aqui um estado de error com a mensagem "O estoque precisa ser um numero inteiro."
            return; 
        }
        data.preco = data.preco * 100;

        setLoading(true);
        const request = await fetch("https://desafio-m03.herokuapp.com/produtos", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });
        setLoading(false);

        if(request.ok) 
            return history.push("/produtos");
        
        const response = await request.json();
        console.log(response);
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