import React from 'react'
import Header from '../components/Header'
import StatusBar from '../components/StatusBar'
import GiftList from '../components/GiftList'
import GiftsData from '../data/gifts.json'

const ListPage = React.createClass({
  getInitialState() {
    return {
      show: 'available'
    }
  },
  setFilter(showString) {
    console.log('caca');
    this.setState({show: showString})
  },
  calculateCommittedTotal() {
    return GiftsData.gifts.reduce((total,gift,i,gifts)=>{
      console.log(i)
      return (gift.committedByUser) ? (total + parseFloat(gift.price.price)) : total
    },0)
  },
  countCommittedByUser() {
    return GiftsData.gifts.reduce((total,gift,i,gifts)=>{
      return (gift.committedByUser) ? (total + 1) : total
    },0)
  },
  render () {
    const totalPrice = this.calculateCommittedTotal()
    const byUserQty = this.countCommittedByUser()
    return (
      <div className='u_page u_page__ListPage'>
        <Header />
        <StatusBar show={this.state.show} changeFilter={this.setFilter} committedTotalPrice={totalPrice} committedQty={byUserQty} />
        <GiftList gifts={GiftsData.gifts} show={this.state.show} />
      </div>
    )
  }
})

export default ListPage
