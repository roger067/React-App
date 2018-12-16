import React from 'react'
import CoinTable from './components/data-table'

import data from './data/data.json'

import './app.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: data,
    }
  }

  render() {
    return (
        <CoinTable
          data={this.state.data} 
        />
    )
  }
}

export default App
