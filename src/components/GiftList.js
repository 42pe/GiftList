import React from 'react'
import GiftListItem from './GiftListItem'
import ExchangeRate from '../data/exchangeRates.json'
const { oneOf } = React.PropTypes

const GiftList = React.createClass({
  propTypes: {
    show: oneOf(['available','committed','all'])
  },
  getDefaultProps() {
    return {
      show: 'available'
    }
  },
  getSortedGifts() {
    if (this.props.show === 'committed') {
      return this.props.gifts.sort((a,b)=>{return (b.committedByUser)?1:-1})
    } else {
      return this.props.gifts.sort((a,b)=>{
        const aPrice = (a.price.currency === this.props.baseCurrency.code) ? a.price.price : parseFloat(a.price.price) * parseFloat(ExchangeRate[a.price.currency][this.props.baseCurrency.code])
        const bPrice = (b.price.currency === this.props.baseCurrency.code) ? b.price.price : parseFloat(b.price.price) * parseFloat(ExchangeRate[b.price.currency][this.props.baseCurrency.code])
        return (aPrice > bPrice)?-1:1
      })
    }
  },
  render () {
    const gifts = this.getSortedGifts();
    return (
      <main className="container u_gift-list">
        <div className="row">
          {gifts
            .filter((gift)=>{
              if (this.props.show === 'available') {
                return (!gift.isCommitted)
              } else {
                if (this.props.show === 'committed') {
                  return (gift.isCommitted)
                } else {
                  return true
                }
              }
            })
            .map((gift)=>{
              return (<GiftListItem key={gift.id} {...gift} onGiveClick={this.props.onGiveClick} />)
            })}
        </div>
      </main>
    )
  }
});

export default GiftList
