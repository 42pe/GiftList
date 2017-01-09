import React from 'react'
import Header from '../components/Header'
import StatusBar from '../components/StatusBar'
import GiftList from '../components/GiftList'
import GiftsData from '../data/gifts.json'
import Currencies from '../data/currency.json'
import ExchangeRate from '../data/exchangeRates.json'

const ListPage = React.createClass({
  getInitialState() {
    this.baseCurrency = this.getBaseCurrency()
    return {
      show: 'available'
    }
  },
  setFilter(showString) {
    this.setState({show: showString})
  },
  calculateCommittedTotal() {
    return GiftsData.gifts.reduce((total,gift,i,gifts)=>{
      if (gift.committedByUser) {
        if (gift.price.currency === this.baseCurrency.code) {
          return (total + parseFloat(gift.price.price))
        } else {
          return (total + (parseFloat(gift.price.price) * parseFloat(ExchangeRate[gift.price.currency][this.baseCurrency.code])) )
        }
      } else {
        return total
      }
    },0)
  },
  countCommittedByUser() {
    return GiftsData.gifts.reduce((total,gift,i,gifts)=>{
      return (gift.committedByUser) ? (total + 1) : total
    },0)
  },
  getBaseCurrency() {
    let currencies = {}
    GiftsData.gifts.forEach((gift, i, gifts)=>{
      currencies[gift.price.currency] = (currencies[gift.price.currency] !== undefined) ? currencies[gift.price.currency] + 1 : 1
    })
    let finalCurrency
    let finalCurrencyCount = 0
    Object.keys(currencies).forEach((curr,i,keys)=>{
      if (finalCurrencyCount < currencies[curr]) {
        finalCurrencyCount = currencies[curr]
        finalCurrency = curr
      }
    })
    return Currencies[finalCurrency]
  },
  render () {
    const totalPrice = this.calculateCommittedTotal()
    const byUserQty = this.countCommittedByUser()
    return (
      <div className='u_page u_page__ListPage'>
        <Header />
        <StatusBar show={this.state.show} changeFilter={this.setFilter} committedTotalPrice={totalPrice} committedQty={byUserQty} baseCurrencySymbol={this.baseCurrency.symbol} />
        <GiftList gifts={GiftsData.gifts.sort((a,b)=>{return (a.price.price > b.price.price)?-1:1})} show={this.state.show} />
      </div>
    )
  }
})

export default ListPage
