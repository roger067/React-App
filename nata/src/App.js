import React from 'react'
import Table from './components/data-table'
import Navbar from './components/navbar.jsx'
import Footer from './components/footer.jsx'
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
      <div>
        <Navbar />
        <div class="container">
          <div class="row">
            <div class="col-sm-10 col-sm-offset-1">
              <Table data={this.state.data} />
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default App
