import { TiShoppingCart } from "react-icons/ti";
import Category from './category/Category';
import Price from "./price/Price";
import "./sidebar.css";
import Colors from "./colors/Colors";

const Sidebar = ({handleChange}) => {
  return (
    <>
        <section className="sidebar">
            <div className="sidebarContainer">
            <TiShoppingCart className="sidebarIcon"/>
            </div>
            <Category handleChange={handleChange}/>
            <Price handleChange={handleChange}/>
            <Colors handleChange={handleChange}/>
        </section>
    </>
  )
}

export default Sidebar