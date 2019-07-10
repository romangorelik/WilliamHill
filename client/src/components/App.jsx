import React from 'react'
import axios from 'axios'

class App extends React.Component {
  state = {
    allInfo: {}
  }

  componentDidMount () {
    if (localStorage.getItem('KnicksInfo')) {
      let info = JSON.parse(localStorage.getItem('KnicksInfo'))
      this.setState({
        allInfo: info
      })
    } else {
      this.pullInformation()
    }
  }

  pullInformation = () => {
    axios.get('/knicks')
      .then(res => {
        localStorage.setItem('KnicksInfo', JSON.stringify(res.data))
        this.setState({
          allInfo: res.data
        })
      })
      .catch(err => console.error(err))
  }

  render () {
    return (
      <div>
        {console.log(this.state.allInfo)}
        {console.log(localStorage)}
      </div>
    )
  }
}

export default App