import Input from "../../components/Input"
import "./colors.css"

const Colors = ({handleChange}) => {
  return (
    <div className="colorContainer">
    <h2 className="sidebarTitle colorTitle">Color</h2>
    <label className="sidebarLabelContainer">
        <input onChange={handleChange} type="radio" value="" name="test1"/>
        <span className="checkMark"></span>All
      </label>

      <Input 
      handleChange={handleChange}
      value="black"
      title="Black"
      name="test1"
      
      />

      <Input 
      handleChange={handleChange}
      value="blue"
      title="Blue"
      name="test1"
      
      />

      <Input 
      handleChange={handleChange}
      value="red"
      title="Red"
      name="test1"
      
      />

      <Input 
      handleChange={handleChange}
      value="green"
      title="Green"
      name="test1"
      
      />

      <Input 
      handleChange={handleChange}
      value="white"
      title="white"
      name="test1"
      
      />
  
  </div>
  )
}

export default Colors