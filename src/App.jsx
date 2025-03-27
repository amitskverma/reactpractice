import './App.css'
//import aws from '../images/aws.png';
import { useState } from 'react';

function Header({name}) {
  return(
    <header>{name} Head </header>
  );
}
const items=["Zero2One","PowerofSubconciousMind","CelebratingSilence"]

const dishObject=items.map((dish,i)=>({
  id:i,
  title:dish
}));

function Main({dishes,openStatus,onStatus}){
  return(  
  <>
  <main> 
             <h3>Currently Shop  {openStatus ? "Open":
              "Closed"} Shop</h3>
              <button onClick={()=>onStatus(!openStatus)}
  > {openStatus ?"closed":"open" } Restro
              </button>
             
             <ul>{dishes.map((dish)=>(
             <li key={dish.id}>{dish.title}</li>

            ))
    }
    </ul>
    </main>
    </>)
}


function App() {
  const [status,setStatus]=useState(true);
  return (<div>
  <h1>Book Shop  is currently {status ? "open" :"Closed"}</h1>
  <button onClick={()=>setStatus(!status)}
  > {status ?"closed":"open" } SHOP
  </button>
 
  <Header name="amit"/>
  <Main dishes={dishObject} openStatus={status} onStatus={setStatus}/>

  </div>
    
  )
}

export default App
