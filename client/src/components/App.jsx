import React from 'react'
import axios from 'axios'

class App extends React.Component {
  state = {
    allInfo: {}
  }

  componentDidMount () {
    this.pullInformation();
  }

  pullInformation = () => {
    axios.get('/knicks')
      .then(res => {
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
      </div>
    )
  }
}

export default App