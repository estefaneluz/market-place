import { Typography, TextField, InputAdornment, Input, InputLabel, FormControl } from "@material-ui/core";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useHistory, useParams } from 'react-router-dom';
import ActionButtons from "../../components/ActionButtons";
import useStyles  from "../../styles/form"; 
import "./styles.css"

export default function EditProduct(){
    const [product, setProduct] = useState({});
    const { setLoading, token } = useContext(AuthContext); 
    const params = useParams("/produtos/:id/editar");
    const history = useHistory();
    const styles = useStyles();

    useEffect(()=>{
        const getProduct = async () => {
            const { id } = params;
            
            setLoading(true);
            const request = await fetch(`https://desafio-m03.herokuapp.com/produtos/${id}`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            setLoading(false);

            const response = await request.json();
            console.log(response);
            setProduct(response);
        }

        getProduct();
    }, [])

    return(
        <>
        <Typography variant="h4" component="h2"> Editar produto </Typography>
        <div className="row">
            {!!product.nome &&
            <form className={styles.column} >
                <TextField  
                    label="Nome do produto" 
                    defaultValue={product.nome}
                />
                <div className="row">
                    <FormControl>
                        <InputLabel htmlFor="preco">
                            Preço
                        </InputLabel>
                        
                        <Input 
                            id="preco"
                            startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                            defaultValue={(product.preco/100)}
                        />
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="estoque">
                            Estoque
                        </InputLabel>
                        
                        <Input 
                            id="estoque"
                            startAdornment={<InputAdornment position="start">Un</InputAdornment>}
                            defaultValue={product.estoque}
                        />
                    </FormControl>
                </div>
                <TextField 
                    label="Descrição do produto"
                    defaultValue={product.descricao}
                />
                <TextField 
                    label="Imagem"
                    defaultValue={product.imagem}
                />
                <ActionButtons/>
            </form>}
            <img 
            className="img-product"
            src={product.imagem}/>
        </div> 
        </>
    );
}