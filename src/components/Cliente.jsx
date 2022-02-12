
const Cliente = ({cliente,setCliente}) => {

  return (
    <div className='mt-3 bg-white shadow-md px-10 py-10 rounded-md mx-5'>
    <p className='font-bold mb-3 text-gray-70 uppercase'>nombre del movil: {""}
      <span  className='font-normal normal-case'>{cliente.nombre}</span>
    </p>
    <p className='font-bold mb-3 text-gray-70 uppercase'> nombre cliente: {""}
      <span  className='font-normal normal-case'>{cliente.propietario}</span>
    </p>
    <p className='font-bold mb-3 text-gray-70 uppercase'>email: {""}
      <span  className='font-normal normal-case'>{cliente.email}</span>
    </p>
    <p className='font-bold mb-3 text-gray-70 uppercase'>fecha: {""}
      <span  className='font-normal normal-case'>{cliente.fecha}</span>
    </p>
    <p className='font-bold mb-3 text-gray-70 uppercase'>tipo de daño: {""}
      <span  className='font-normal normal-case'>{cliente.dano}</span>
    </p>
    <div className="flex justify-between mt-10">
      <button className="py-2 px-10 bg-indigo-600 hover: bg-indigo-500 text-white font-bold uppercase rounded">editar</button>
      <button className="py-2 px-10 bg-red-600 hover: bg-red-500 text-white font-bold uppercase rounded-lg">eliminar</button>
    </div>
  </div>

  
  )
};

export default Cliente;
