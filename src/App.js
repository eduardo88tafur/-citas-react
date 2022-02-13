import {useState} from "react"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
import Formulario from "./components/Formulario"


function App(){
  const [clientes, setClientes]=useState([]);  
  const [cliente,setCliente]=useState({});
  const eliminarCliente=(id)=>{
console.log('eliminando cliente',id);
  }
    return(
      <div className="container mx-auto mt-20">
        <Header/>
        <div className="mt-12 flex">
        <Formulario
        clientes={clientes}
        setClientes={setClientes}
        cliente={cliente}
        />
        <ListadoPacientes
        clientes={clientes}
        setCliente={setCliente}
        eliminarCliente={eliminarCliente}
        />
        </div>
        </div>
    )
    } 
export default App
