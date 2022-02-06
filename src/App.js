import {useState} from "react"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPaciente"
import Formulario from "./components/Formulario"

function App(){
  const [clientes, setClientes]=useState([]);  
  
  
    return(
      <div className="container mx-auto mt-20">
        <Header/>
        <div className="mt-12 flex">
        <Formulario
        clientes={clientes}
        setClientes={setClientes}
        />
        <ListadoPacientes/>
      </div>
      </div>
  
    )
    } 

export default App
