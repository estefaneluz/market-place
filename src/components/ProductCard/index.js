import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import trashIcon from "../../assets/trash.svg";

export default function ProductCard() {
    const styles = useStyles();

    return (
    <Card className={styles.root}>
        <CardMedia
        className={styles.media}
        image="https://aloalobahia.com/images/p/pizzadiadapizza_alo_alo_bahia.jpg"
        title="Contemplative Reptile"
        >
            <img src={trashIcon} className={styles.redCircle} />
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
    );
}
