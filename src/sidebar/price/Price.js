import Input from "../../components/Input"
import "./price.css"

const Price = ({handleChange}) => {
  return (
    <div className="priceContainer">
    <h2 className="sidebarTitle priceTitle">Price</h2>
    <label className="sidebarLabelContainer">
        <input onChange={handleChange} type="radio" value="" name="test2"/>
        <span className="checkMark"></span>All
      </label>

      <Input 
      handleChange={handleChange}
      value={50}
      title="$0-50"
      name="test2"
      />
      <Input 
      handleChange={handleChange}
      value={100}
      title="$50-100"
      name="test2"
      />
      <Input 
      handleChange={handleChange}
      value={150}
      title="$100-150"
      name="test2"
      />
      <Input 
      handleChange={handleChange}
      value={200}
      title="Over $150"
      name="test2"
      />

  </div>
  )
}

export default Price