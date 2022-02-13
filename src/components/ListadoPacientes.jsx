import {useEffect} from "react";
import Cliente from "./Cliente";

const ListadoPacientes = ({clientes,setCliente,eliminarCliente}) => {

  useEffect((cliente)=>{
    if(clientes.length>0){
      console.log('nuevo cliente');
    }  
  },[clientes])
  
  return (
    <div className=" md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">listado de clientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        administra tus{" "}
        <span className="text-indigo-600 font- bold">clientes y citas</span>
      </p>
 {clientes.map((cliente)=>{
      return (
        <Cliente
        key={cliente.id}
        cliente={cliente}
        setCliente={setCliente}
        eliminarCliente={eliminarCliente}
        />
     )
    })}

</div>
)
}
export default ListadoPacientes;
