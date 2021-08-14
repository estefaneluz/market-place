import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
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
    }
  });