import { useEffect, useState, useContext } from "react";
import { Typography } from "@material-ui/core";
import { AuthContext } from "../../contexts/AuthContext";
import { getProducts } from "../../functions/getProducts";
import ActionButtons from "../../components/ActionButtons";
import ProductCard from "../../components/ProductCard";
import './styles.css'

export default function Products(){
    const { token, setLoading } = useContext(AuthContext);
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        getProducts(setLoading, setProducts, token);
    }, []);

    return(
        <>
        <Typography variant="h4" component="h2"> Seus produtos </Typography>
        <div className="container-card">
            {products.map( product => (<ProductCard key={product.nome} product={product} setProducts={setProducts}/>))}
        </div>
        <ActionButtons/>
        </>
    );
}