import { useState } from "react";
import Products from './DB/data';
import Card from "./components/Card";
import Items from "./items/Items";
import Nav from "./navigation/Nav";
import Recommended from "./recommended/Recommended";
import Sidebar from "./sidebar/Sidebar";

function App() {
  const [category,setCategory]=useState(null)

  const [query,setQuery]=useState("")

  const handleInputChange=(event)=>{
    setQuery(event.target.value)
  }

  const filterItems=Products.filter((product)=>
    product.title.toLowerCase().indexOf(query.toLowerCase())!==-1
  )

const handleChange=(event)=>{
  setCategory(event.target.value)
}

const handleClick=(event)=>{
  setCategory(event.target.value)
}

function filteredData(Products,selected,query){
    let filteredProducts=Products

    if(query){
      filteredProducts=filterItems
    }

  
    //filter selected
     if(selected){
      filteredProducts=filteredProducts.filter(({category,color,company,newPrice,title})=>
      category===selected||
      color===selected||
      company===selected||
      newPrice===selected||
      title===selected)
    }
    return filteredProducts.map(({img,title,star,reviews,prevPrice,newPrice})=>(
        <Card
         key={Math.random()}
         img={img}
         title={title}
         star={star}
         reviews={reviews}
         prevPrice={prevPrice}
         newPrice={newPrice}
         />
    ))
}

const result=filteredData(Products,category,query)
  return (
    <div className="App">
      <Sidebar handleChange={handleChange}/>
      <Nav query={query} handleInputChange={handleInputChange}/>
      <Recommended handleClick={handleClick}/>
      <Items result={result}/>
    </div>
  );
}

export default App;
