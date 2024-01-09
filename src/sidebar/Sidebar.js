import "./sidebar.css"
import { TiShoppingCart } from "react-icons/ti";
import Category from './category/Category';
import Price from "./price/Price";
import Colors from "./price/Price";

const Sidebar = () => {
  return (
    <>
        <section className="sidebar">
            <div className="sidebarContainer">
            <TiShoppingCart className="sidebarIcon"/>
            </div>
            <Category/>
            <Price/>
            <Colors/>
        </section>
    </>
  )
}

export default Sidebar