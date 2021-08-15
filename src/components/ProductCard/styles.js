import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme)=>({
    root: {
      width: 200,
      height: 380,
      borderRadius: 24,
    },
    media: {
      height: 240,
    },
    redCircle: {
      margin: "22px 0 0 22px",
      padding: 12,
      borderRadius: "50%",
      backgroundColor: "#FF505F",
      cursor: "pointer",
    },
    cardFooter: {
        display: "flex",
        justifyContent: "space-between",
        alignSelf: "flex-end",
    },
    content: {
        display: "grid",
        height: 140,
        alignItems: "space-between",
    },
    text: {
        maxWidth: 200,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },
    upper: {
        textTransform: "uppercase"
    },
    bold: {
        fontWeight: "bold"
    },

    
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      borderRadius: 5,
      padding: theme.spacing(2, 4, 3),
      height: 188,
      display: "grid"
    },
    primary: {
      backgroundColor: "#007DFF",
      "&:hover": {
          backgroundColor: "#0471E3"
      }
    },
    secondary: {
      backgroundColor: "#FF505F",
      marginLeft: 10,
      "&:hover": {
          backgroundColor: "#fc3545"
      }
    },
    containerBtn: {
      justifySelf: "end"    
    }
  }));