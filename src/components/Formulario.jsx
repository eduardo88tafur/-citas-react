import { useState} from "react";
import Error from "./Error";

const Formulario = ({clientes,setClientes}) => {
   
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [dano, setDano] = useState("");
  const [error, setError] = useState(false);
 const generarId=()=>{
   const random= Math.random().toString(36).Substr(2);
   const fecha= Date.now().toString(36)
   return fecha +random
 }

  const handleSubmit=(e)=>{
    e.preventDefault();
  if ([nombre, propietario, email, fecha, dano].includes("")) {
    console.log("tienes un campo vacio");
    setError(true);
    return;
    }
    setError(false);
    const objetoCliente={
      nombre,
     propietario,
     email,
     fecha,
     dano,
     id: generarId()
   }

  setClientes([...clientes,objetoCliente]);
  setNombre("")
  setPropietario("")
  setEmail("")
  setFecha("")
  setDano("")
}


  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text center">reportes de daños</h2>
      <p className="text-lg mt-5">añade celulares defectuosos </p>
      <span className="text-indigo-600 font-bold">administarlos</span>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5"
          >
        {error && <Error>
          <p>todos los campos son obligatorios</p>
          <h1>por favor complete </h1>
          </Error>}
        <div className="mb-5">
          <label
            htmlFor="celular"
            className="block text-black uppercase font-bold"
          >
            nombre movil
          </label>
          <input
            type="text"
            id="celular"
            placeholder="ingrese el nombre del equipo"
            className=" border-2 w-full p-2 mt placeholder-red-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <div className="mb-5">
            <label
              htmlFor="propietario"
              className="block text-black uppercase font-bold"
            >
              nombre del propietario
            </label>
            <input
              type="text"
              id="propietario"
              placeholder="ingrese el nombre del propietario"
              className=" border-2 w-full p-2 mt placeholder-red-400 rounded-md"
              value={propietario}
              onChange={(e) => setPropietario(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-black uppercase font-bold"
            >
               email
            </label>
            <input
              type="email"
              id="email"
              placeholder="ingrese el nombre del email"
              className=" border-2 w-full p-2 mt placeholder-red-400 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="fecha"
              className="block text-black uppercase font-bold"
            >
              fecha
            </label>
            <input
              type="date"
              id="fecha"
              placeholder="ingrese la fecha"
              className=" border-2 w-full p-2 mt placeholder-red-400 rounded-md"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
            <div
            className="mb-5">
              <label htmlFor="tipo de daño" className="block text-gray-700 uppercase font-bold  mt-10 ">tipo de daño</label>
            </div>
            <textarea
              id="daño"
              className=" border-2 w-full p-2 mt placeholder-red-400 rounded-md"
              placeholder="describa el tipo de daño"
              value={dano}
              onChange={(e) => setDano(e.target.value)}
            ></textarea>
          </div>
          <input
            type="submit"
            className=" bg-orange-400 w-full p-3 uppercase font-bold
         hover: bg-indigo-700 cursor-pointer transition-all"
            value="enviar datos"
          />
        </div>
      </form>
    </div>
  );
};

export default Formulario;
