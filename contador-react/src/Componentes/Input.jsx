import React from 'react'

const Input = ({ nombre, setNombre, password, setPassword }) => {
  return (
    <div>
        <label>Nombre</label>
        <input type="text" onChange={(e) => setNombre(e.target.value)} placeholder="Ingresa un Texto" id='nombre' value={nombre}></input>
        <label>Contraseña</label>
        <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder="Ingresa una contraseña" id='password' value={password}></input>
    </div> 
  )
}

export default Input