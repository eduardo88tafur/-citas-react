import { useState,useEffect } from "react";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";
import Formulario from "./components/Formulario";

function App() {
  const [clientes, setClientes] = useState([]);
  const [cliente, setCliente] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
      const clientesLS = JSON.parse(localStorage.getItem("clientes")) ?? [];
      setCliente(clientesLS);
    };
    obtenerLS();
  }, []);


  useEffect(
    (cliente) => {
        localStorage.setItem("clientes", JSON.stringify(clientes));
    },
    [clientes]
  );
  const eliminarCliente = (id) => {
    const clientesActualizados=clientes.filter(cliente=>cliente.id !==id)
    setClientes(clientesActualizados);
  };
  return (
    <div className="container mx-auto mt-20">
      <Header />
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
  );
}
export default App;
