import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        minHeight: "100vh",
        display: "grid",
        placeContent: "center"
    },
    form: {
        display: "grid",
        placeContent: "center",
        backgroundColor: "#fff",
        borderRadius: 16, 
        boxShadow: `box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 
        0px 15px 22px 2px rgba(0, 0, 0, 0.14), 
        0px 6px 28px 5px rgba(0, 0, 0, 0.12)`,
        padding: "10vh 5vw",
        rowGap: 40,
        textAlign: "center",
    },
    action: {
        display: "grid",
        rowGap: 20,
        color: "rgb(0,0,0,0.8)",
        fontSize: "0.78em",
        fontFamily: "Arial",
        "& a":{
            textTransform: "uppercase"
        }
    }
});

export default useStyles;