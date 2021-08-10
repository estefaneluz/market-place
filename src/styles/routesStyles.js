import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme)=>({
    backdrop: {
        zIndex: theme.zIndex.drawer + 3,
        color: '#fff',
    },
    content: {
        padding: "78px 0 0 78px",
        display: "grid", 
        rowGap: 60,
        minWidth: "65vw",
        minHeight: "100vh",
    }, 
    wrapper: {
        display: "flex",
    }
}));