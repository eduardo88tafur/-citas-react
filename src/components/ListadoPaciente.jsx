import React from "react";
import Cliente from "./Cliente";

const ListadoPaciente = () => {
  return (
    <div className=" w-1/2 lg:w-3/5">
      <h2 className="font-black text-3xl text-center">listado de clientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        administra tus{" "}
        <span className="text-indigo-600 font- bold">clientes y citas</span>
      </p>
      <Cliente />
      <Cliente />
      <Cliente />
    </div>
  );
};

export default ListadoPaciente;
