
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Footer from "./Footer"
import Header from './Header'
import Home from './Home'
import Donate from './Donate'


function App() {

 
  

  return (
    <div>

    <Header />

    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/give" element={<Donate />}/>
    </Routes>

   

 <Footer />
 </div>
   
  );
}

export default App










