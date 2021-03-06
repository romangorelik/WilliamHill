import React from 'react'
import Header from './Header.jsx'
import Banner from './Banner.jsx'
import NewsFeed from './NewsFeed.jsx'
import TeamInfo from './TeamInfo.jsx'
import Stadium from './Stadium.jsx'
import Footer from './Footer.jsx'

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
      this.pullAllInformation()
    }

    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
  }

  pullAllInformation = () => {
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
        <Header teamLogo={this.state.allInfo.strTeamBadge} teamName={this.state.allInfo.strTeam}/>
        <Banner stadiumImage={this.state.allInfo.strStadiumThumb}/>
        <NewsFeed />
        <TeamInfo 
          teamName={this.state.allInfo.strTeam}
          teamDescription={this.state.allInfo.strDescriptionEN}
          teamLogo={this.state.allInfo.strTeamBadge}
        />
        <Stadium 
          stadiumName={this.state.allInfo.strStadium}
          stadiumDescription={this.state.allInfo.strStadiumDescription}
          stadiumLocation={this.state.allInfo.strStadiumLocation}
          stadiumCapacity={this.state.allInfo.intStadiumCapacity}
          stadiumImage={this.state.allInfo.strStadiumThumb}
        />
        <Footer 
          teamWebsite={this.state.allInfo.strWebsite}
          teamFacebook={this.state.allInfo.strFacebook}
          teamTwitter={this.state.allInfo.strTwitter}
          teamInstagram={this.state.allInfo.strInstagram}
          teamYoutube={this.state.allInfo.strYoutube}
        />
      </div>
    )
  }
}

export default App