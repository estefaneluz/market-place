import store_selected_img from "../../assets/store-selected.svg"
import user_selected_img from "../../assets/user-selected.svg"
import user_img from "../../assets/user.svg"
import store_img from "../../assets/store.svg"
import close_img from "../../assets/close.svg"
import "./styles.css"

export default function SideNav(){
    return (
        <aside className="sidenav">
            <img src={store_selected_img} />
            <img src={user_img}/>
            <img src={close_img}/>
        </aside>
    );
}