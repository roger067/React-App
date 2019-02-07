import React from 'react'

const Table = (props) => {
  return (
    <div className="scroll-table">
      <table className="table-fill">
        <thead>
          <tr>
            <th onClick={()=> props.onSort('name')} className="text-left">Nome</th>
            <th onClick={()=> props.onSort('address')} className="text-left">Endereço</th>
            <th onClick={()=> props.onSort('city')} className="text-left">Cidade</th>
            <th onClick={()=> props.onSort('region')} className="text-left">Região</th>
            <th onClick={()=> props.onSort('country')} className="text-left">País</th>
            <th onClick={()=> props.onSort('birthday')} className="text-left">Aniversário</th>
          </tr>
        </thead>
        <tbody className="table-hover">
          {
            props.data.map(row => (
              <tr key={row.name}>
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