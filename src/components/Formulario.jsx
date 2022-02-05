import { useState, useEffect } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [fecha, setFecha] = useState(" ");
  const [error, setError] = useState(false);
  const [daño, setDaño] = useState(" ");

  const handleSubmit=(e)=>{
    e.preventDefault();
  

  if ([nombre, propietario, email, fecha, daño].includes("")) {
    console.log("tienes un campo vacio");
   setError(true);
     return;
  }
   setError(false);
  
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
        {error && (
          <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
            <p>todos los campos son obligatorios</p>
          </div>
        )}
        <div className="mb-5">
          <label
            htmlFor="celular"
            className="block text-white uppercase font-bold"
          >
            nombre del celular
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
              className="block text-white uppercase font-bold"
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
              className="block text-white uppercase font-bold"
            >
              nombre del email
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
              className="block text-white uppercase font-bold"
            >
              fecha
            </label>
            <input
              type="date"
              id="fecha"
              placeholder="ingrese la fecha"
              className=" border-2 w-full p-2 mt placeholder-red-400 rounded-md"
              value={fecha}
              onChange={(e) => setFecha(e.target.valuue)}
            />
            <textarea
              id="daño"
              className=" border-2 w-full p-2 mt placeholder-red-400 rounded-md"
              placeholder="describa el tipo de daño"
              value={daño}
              onChange={(e) => setDaño(e.target.valuue)}
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
