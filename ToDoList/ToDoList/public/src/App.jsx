import React from 'react'

export function App () {
  const divStyle = {
    display: 'flex'
  }

  return (

    <div>
        <h1>Lista de pendientes</h1>
      <input type='text' placeholder='Escribe tú tarea'> </input>
      <button> Subir </button> 
    </div>

  )
}
