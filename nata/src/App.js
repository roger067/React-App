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
    this.onSort = this.onSort.bind(this)
  }

  compareBy(key) {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }

  onSort(key) {
    let arrayCopy = [...this.state.data];
    arrayCopy.sort(this.compareBy(key));
    this.setState({ data: arrayCopy });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-sm-10 col-sm-offset-1">
              <Table data={this.state.data} onSort={this.onSort} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
