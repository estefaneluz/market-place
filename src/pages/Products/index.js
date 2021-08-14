import { Typography, TextField } from "@material-ui/core";
import ActionButtons from "../../components/ActionButtons";
import ProductCard from "../../components/ProductCard";
import './styles.css'

export default function Products(){
    return(
        <>
        <Typography variant="h4" component="h2"> Seus produtos </Typography>
        <div className="container-card">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
        <ActionButtons/>
        </>
    );
}