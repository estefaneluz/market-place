import { useState } from "react";
import { Card, CardContent, CardMedia, Typography, Modal, Backdrop, Fade, Button } from "@material-ui/core";
import { useStyles } from "./styles";
import trashIcon from "../../assets/trash.svg";

export default function ProductCard() {
    const styles = useStyles();
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    return (
    <>
        <Card className={styles.root}>
            <CardMedia
            className={styles.media}
            image="https://aloalobahia.com/images/p/pizzadiadapizza_alo_alo_bahia.jpg"
            title="Contemplative Reptile"
            >
                <img 
                    src={trashIcon} className={styles.redCircle} 
                    onClick={()=>setOpen(true)}
                />
            </CardMedia>

            <CardContent className={styles.content}>
                <Typography 
                className={styles.text} 
                gutterBottom variant="h6" component="h3">
                    Lizard
                </Typography>
                <Typography  
                className={styles.text} 
                variant="body2" color="textPrimary" component="p">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Typography>

                <div className={styles.cardFooter}>
                    <Typography 
                    variant="body2" color="textSecondary" component="p"
                    className={styles.upper}>
                        3 Unidades
                    </Typography>

                    <Typography 
                    variant="body2" color="textPrimary" component="p"
                    className={styles.bold}>
                        R$ 99.99
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
