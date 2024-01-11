import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai"
import { FiHeart } from "react-icons/fi"
import "./nav.css"
const Nav = ({handleInputChange, query}) => {
  return (
    <nav>
       <div className="navContainer">
       <input type="text" className="searchInput" onChange={handleInputChange}
          value={query} placeholder="Search your shoes"/>
       </div>
       <div className="profileContainer">
            <a href="#">
                <FiHeart className="navIcons"/>           
            </a>
            <a href="#">
                <AiOutlineShoppingCart className="navIcons"/>           
            </a>
            <a href="#">
                <AiOutlineUserAdd className="navIcons"/>           
            </a>
       </div>
    </nav>
  )
}

export default Nav