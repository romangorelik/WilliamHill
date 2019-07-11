 import React from 'react'

 import axios from 'axios'

 class NewsFeed extends React.Component {
   state = {
     recentNews: []
   }

   componentDidMount () {
    this.getRecentNews()
   }

   getRecentNews = () => {
    axios.get('/recent')
      .then(res => {
        this.setState({
          recentNews: res.data.rss.channel.item
        })
      })
      .catch(err => console.error(err))
  }

   render () {
     return (
       <div className='feedContainer'>
         <marquee behavior="scroll" direction="right" scrollamount="10">
            {this.state.recentNews.map((news, index)=> {
              return (
                <div key={index} className='feedStory'>
                  <a href={news.link._text} target='_blank'>{news.title._text}</a>
                </div>
              )
            })}
         </marquee>
       </div>
     )
   }
 }

 export default NewsFeed