 import Sidebar from "./components/Sidebar"
 import Notes from "./components/Notes"
 import { BrowserRouter,Routes,Route } from "react-router-dom";
 import UserContext from "./context/UserContext";
  function App() {
 
  return <>
    <div id="wrapper" >
    <BrowserRouter>
    <Sidebar/> 
    <Routes>
       <Route path="/notes" element={<UserContext><Notes/></UserContext>}/>
     </Routes>
    </BrowserRouter>
     </div>
     
  </> 
  
  
    
  
}

export default App
