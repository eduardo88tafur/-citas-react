import React from 'react'
import PropTypes from 'prop-types'

const Formulario=()=> {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className='font-black text-3xl text center'>reportes de daños</h2>
      <p className='text-lg mt-5'>añade celulares defectuosos {" "}</p>
      <span className='text-indigo-600 font-bold'>administarlos</span>
      <form className='bg-yellow-400 shadow-md rounded-lg py-10 px-5'>
        <div  className='mb-5'>
          <label  htmlFor='celular' className='block text-white uppercase font-bold'>nombre del celular</label>
          <input
          type="text"
          id='celular'
          placeholder="ingrese el nombre del equipo"
          className=' border-2 w-full p-2 mt placeholder-red-400 rounded-md'
          />
          <div className='mb-5'>
          <label  htmlFor='propietario' className='block text-white uppercase font-bold'>nombre del  propietario</label>
          <input
          type="text"
          id='propietario'
          placeholder="ingrese el nombre del propietario"
          className=' border-2 w-full p-2 mt placeholder-red-400 rounded-md'
          />
        </div>
        <div className='mb-5'>
          <label  htmlFor='email' className='block text-white uppercase font-bold'>nombre del email</label>
          <input
          type="email"
          id='email'
          placeholder="ingrese el nombre del email"
          className=' border-2 w-full p-2 mt placeholder-red-400 rounded-md'
          />
        </div>
        <div className='mb-5'>
          <label  htmlFor='alta' className='block text-white uppercase font-bold'>fecha</label>
          <input
          type="date"
          id='alta'
          placeholder="ingrese la fecha"
          className=' border-2 w-full p-2 mt placeholder-red-400 rounded-md'
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='fecha'>
          </label>
          <textarea
          placeholder='describa el tipo de daño'
          />
        </div>
        <input
        type="submit"
        className=' bg-orange-400 w-full p-3 uppercase font-bold
         hover: bg-indigo-700 cursor-pointer transition-all'
        value="enviar datos"
        />
        </div>
      </form>
    </div>
  )
}

export default Formulario

