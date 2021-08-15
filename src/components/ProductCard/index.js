import { useState, useContext } from "react";
import { Card, CardContent, CardMedia, Typography, Modal, Backdrop, Fade, Button } from "@material-ui/core";
import { AuthContext } from "../../contexts/AuthContext";
import { useHistory } from 'react-router-dom'
import { useStyles } from "./styles";
import trashIcon from "../../assets/trash.svg";
import { getProducts } from "../../functions/getProducts";

export default function ProductCard({product, setProducts}) {
    const { token, setLoading } = useContext(AuthContext);
    const styles = useStyles();
    const history = useHistory();
    const [open, setOpen] = useState(false);
    const [error, setError] = useState('');

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = (e) => {
        e.stopPropagation();
        setOpen(true);
    }

    const deleteProduct = async () => {
        setLoading(true);
        setError('');
        const request = await fetch(`https://desafio-m03.herokuapp.com/produtos/${product.id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
    
        setLoading(false);
        
        if(request.ok){
            handleClose();
            return await getProducts(setLoading, setProducts, token);
        }
        const response = await request.json();
        return setError(response);
    }

    return (
    <>
        <Card className={styles.root} onClick={()=>history.push(`/produtos/${product.id}/editar`)}>
            <CardMedia
            className={styles.media}
            image={product.imagem}
            title="Contemplative Reptile"
            >
                <img 
                    src={trashIcon} className={styles.redCircle} 
                    onClick={(e) => handleOpen(e)}
                />
            </CardMedia>

            <CardContent className={styles.content}>
                <Typography 
                className={styles.text} 
                gutterBottom variant="h6" component="h3">
                    {product.nome}
                </Typography>
                <Typography  
                className={styles.text} 
                variant="body2" color="textPrimary" component="p">
                    {product.descricao}
                </Typography>

                <div className={styles.cardFooter}>
                    <Typography 
                    variant="body2" color="textSecondary" component="p"
                    className={styles.upper}>
                        {product.estoque} Unidades
                    </Typography>

                    <Typography 
                    variant="body2" color="textPrimary" component="p"
                    className={styles.bold}>
                        R$ {product.preco}
                    </Typography>
                </div>
            </CardContent>
        </Card>

        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={styles.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
        timeout: 500,
        }}
        >
        <Fade in={open}>
        <div className={styles.paper}>
            <Typography 
            gutterBottom variant="h6" component="h3">
                Remover produto do catálogo?
            </Typography>
            <Typography 
            gutterBottom color="textSecondary" component="p">
                Esta ação não pode ser desfeita.
            </Typography>

            <div className={styles.containerBtn}>
                <Button 
                onClick={handleClose}
                className={styles.primary}
                variant="contained" color="primary">
                    Manter Produto
                </Button>
                <Button 
                onClick={()=>deleteProduct(setLoading, setError, token, history, product.id)}
                className={styles.secondary}
                variant="contained" color="secondary">
                    Deletar
                </Button>
            </div>
        </div>
        </Fade>
        </Modal>
    </>
    );
}
