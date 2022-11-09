import Sidebar from "components/Sidebar";
import BottomBar from "components/BottomBar";
import Content from "components/Content";
import {  Router } from "react-router-dom";
function App() {
  return (
    <>
    
      <div className="wrapper">
        <Sidebar/>
        <Content/>
      </div>
      <BottomBar/>
    
    </>
  );
}

export default App;
