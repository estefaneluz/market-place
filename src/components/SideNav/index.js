import store_selected_img from "../../assets/store-selected.svg"
import user_selected_img from "../../assets/user-selected.svg"
import user_img from "../../assets/user.svg"
import store_img from "../../assets/store.svg"
import close_img from "../../assets/close.svg"
import { AuthContext } from "../../contexts/AuthContext"
import { useContext } from "react"
import { Link, useLocation } from "react-router-dom"
import "./styles.css"

export default function SideNav(){
    const { setToken } = useContext(AuthContext);
    const location = useLocation();

    return (
        <aside className="sidenav">
            <Link to="/produtos">
                <img src={location.pathname ==="/produtos" ? store_selected_img : store_img} />
            </Link>
            <Link to="/perfil">
                <img src={location.pathname ==="/perfil" ? user_selected_img : user_img}/>
            </Link>
            <Link to="/" onClick={()=>setToken('')}><img src={close_img}/></Link>
        </aside>
    );
}