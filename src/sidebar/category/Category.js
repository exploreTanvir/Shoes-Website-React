import Input from "../../components/Input";
import "./category.css";

const Category = ({handleChange}) => {
  return (
    <div>
      <h2 className="sidebarTitle">Category</h2>
      <div>
      <label className="sidebarLabelContainer">
        <input onChange={handleChange} type="radio" value="" name="test"/>
        <span className="checkMark"></span>All
      </label>

      <Input 
      handleChange={handleChange}
      value="sneakers"
      title="Sneakers"
      name="test"
      />
      <Input 
      handleChange={handleChange}
      value="flats"
      title="Flats"
      name="test"
      />
      <Input 
      handleChange={handleChange}
      value="sandals"
      title="Sandals"
      name="test"
      />
      <Input 
      handleChange={handleChange}
      value="hells"
      title="Hells"
      name="test"
      />
  
      </div>
    </div>
  )
}

export default Category