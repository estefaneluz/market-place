import store_selected_img from "../../assets/store-selected.svg"
import user_selected_img from "../../assets/user-selected.svg"
import user_img from "../../assets/user.svg"
import store_img from "../../assets/store.svg"
import close_img from "../../assets/close.svg"
import { AuthContext } from "../../contexts/AuthContext"
import { useContext } from "react"
import { Link } from "react-router-dom"
import "./styles.css"

export default function SideNav(){
    const { setToken } = useContext(AuthContext);
    return (
        <aside className="sidenav">
            <Link to="/produtos"><img src={store_selected_img} /></Link>
            <Link to="/perfil"><img src={user_img}/></Link>
            <Link to="/" onClick={()=>setToken('')}><img src={close_img}/></Link>
        </aside>
    );
}