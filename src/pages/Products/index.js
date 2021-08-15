import { useEffect, useState, useContext } from "react";
import { Typography } from "@material-ui/core";
import { AuthContext } from "../../contexts/AuthContext";
import ActionButtons from "../../components/ActionButtons";
import ProductCard from "../../components/ProductCard";
import './styles.css'

export default function Products(){
    const { token, setLoading, user } = useContext(AuthContext);
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        const getProducts = async () => {
            setLoading(true);

            const request = await fetch('https://desafio-m03.herokuapp.com/produtos/', {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });

            setLoading(false);
            
            const response = await request.json();
            return setProducts(response);
        }

        getProducts();
    }, []);

    return(
        <>
        <Typography variant="h4" component="h2"> Seus produtos </Typography>
        <div className="container-card">
            {products.map( product => (<ProductCard product={product}/>))}
        </div>
        <ActionButtons/>
        </>
    );
}