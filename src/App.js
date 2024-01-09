import Items from "./items/Items";
import Nav from "./navigation/Nav";
import Recommended from "./recommended/Recommended";
import Sidebar from "./sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Nav/>
      <Recommended/>
      <Items/>
    </div>
  );
}

export default App;
