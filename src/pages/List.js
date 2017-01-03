import React from 'react'
import Header from '../components/Header'
import StatusBar from '../components/StatusBar'
import GiftList from '../components/GiftList'
import GiftsData from '../data/gifts.json'

const ListPage = React.createClass({
  render () {
    return (
      <div className='u_page u_page__ListPage'>
        <Header />
        <StatusBar />
        <GiftList gifts={GiftsData.gifts} />
      </div>
    )
  }
})

export default ListPage
