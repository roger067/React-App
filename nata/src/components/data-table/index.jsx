import React from 'react'

const Table = (props) => {
  return (
    <div className="scroll-table">
      <table className="table-fill">
        <thead>
          <tr>
            <th className="text-left">Nome</th>
            <th className="text-left">Endereço</th>
            <th className="text-left">Cidade</th>
            <th className="text-left">Região</th>
            <th className="text-left">País</th>
            <th className="text-left">Aniversário</th>
          </tr>
        </thead>
        <tbody className="table-hover">
          {
            props.data.map(row => (
              <tr>
                <td>{row.name}</td>
                <td>{row.address}</td>
                <td>{row.city}</td>
                <td>{row.region}</td>
                <td>{row.country}</td>
                <td>{row.birthday}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table