import Header from './component/Header';
import NavList from './component/NavList';
import CardSection from './component/CardSection'
import { useState } from 'react';


function App() {
  const [itemDisplay, setItemDisplay] = useState("Add");

  return (
    <>
      <div className="project-container py-3 bg-Dark-Gradient">
        <Header />
        <NavList setItemDisplay = {setItemDisplay} itemDisplay ={itemDisplay} />
        <CardSection itemDisplay ={itemDisplay} setItemDisplay = {setItemDisplay} />
      </div>
    </>
  )
}

export default App;
