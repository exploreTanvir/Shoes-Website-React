import "./category.css"

const Category = () => {
  return (
    <div>
      <h2 className="sidebarTitle">Category</h2>
      <div>
      <label className="sidebarLabelContainer">
          <input type="radio" name="test"/>
          <span className="checkMark"></span>All
        </label>
      <label className="sidebarLabelContainer">
          <input type="radio" name="test"/>
          <span className="checkMark"></span>All
        </label>
      <label className="sidebarLabelContainer">
          <input type="radio" name="test"/>
          <span className="checkMark"></span>All
        </label>
      <label className="sidebarLabelContainer">
          <input type="radio" name="test"/>
          <span className="checkMark"></span>All
        </label>
      </div>
    </div>
  )
}

export default Category