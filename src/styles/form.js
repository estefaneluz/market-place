import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        minHeight: "100vh",
        display: "grid",
        placeContent: "center",
    },
    form: {
        display: "grid",
        placeContent: "center",
        backgroundColor: "#fff",
        borderRadius: 16, 
        boxShadow: `0px 8px 9px -5px rgba(0, 0, 0, 0.1), 
        0px 8px 10px 2px rgba(0, 0, 0, 0.03), 
        0px 6px 28px 5px rgba(0, 0, 0, 0.10)`,
        padding: "10vh 5vw",
        rowGap: 40,
        textAlign: "center",
        maxWidth: 420,
    },
    action: {
        display: "grid",
        rowGap: 20,
        color: "rgb(0,0,0,0.8)",
        fontSize: "0.78em",
        fontFamily: "Arial",
        "& a":{
            textTransform: "uppercase",
            color: "#007DFF",
        }
    },
    button: {
        backgroundColor: "#007DFF",
        "&:hover": {
            backgroundColor: "#0471E3"
        }
    },
    margin: {
        margin: "10vh 1vw",
    }
}));

export default useStyles;