import "./recommended.css"

const Recommended = ({handleClick,value,title}) => {
  return (
    <>
      <div className="">
        <h2 className="recommendedTitle">Recommended</h2>
        <div className="recommendedContainer">
          <button handleClick={handleClick} value="All Products" title="All Products" className="btns">All Products</button>
          <button onClick={handleClick}  value="Adidas" title="Adidas" className="btns">Adidas</button>   
          <button onClick={handleClick}  value="Nike" title="Nike" className="btns">Nike</button>   
          <button onClick={handleClick}  value="Vans" title="Vans" className="btns">Vans</button>  
          <button handleClick={handleClick} value="Puma" title="Puma" className="btns">Puma</button> 
          
        </div>
      </div>
    </>
  )
}

export default Recommended