import React from 'react'

class App extends React.Component {
  state = {
    app: 'hello'
  }

  render () {
    return (
      <div>
        {this.state.app}
      </div>
    )
  }
}

export default App