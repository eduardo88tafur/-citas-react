import React from "react";
const Cliente = ({ cliente, setCliente, eliminarCliente }) => {
  const { nombre, propietario, email, fecha, dano, id } = cliente;

  return (
    <div className="mt-3 bg-white shadow-md px-10 py-10 rounded-md mx-5">
      <p className="font-bold mb-3 text-gray-70 uppercase">
        nombre del movil: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-70 uppercase">
        {" "}
        nombre cliente: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-70 uppercase">
        email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-70 uppercase">
        fecha: {""}
        <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-70 uppercase">
        tipo de daño: {""}
        <span className="font-normal normal-case">{dano}</span>
      </p>
      <div className="flex justify-between mt-10">
        <button
          className="py-2 px-10 bg-indigo-800 hover: bg-indigo-400 text-white font-bold uppercase rounded"
          onClick={() => setCliente(cliente)}
        >
          editar
        </button>
        <button className="py-2 px-10 bg-red-600 hover: bg-red-500 text-white font-bold uppercase rounded-lg"
          onClick={() => eliminarCliente(id)}>
          eliminar
        </button>
      </div>
    </div>
  );
};

export default Cliente;
