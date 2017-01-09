import React from 'react'
import GiftListItem from './GiftListItem'

const GiftList = React.createClass({
  getSortedGifts() {
    if (this.props.show === 'committed') {
      return this.props.gifts.sort((a,b)=>{return (b.committedByUser)?1:-1})
    } else {
      return this.props.gifts.sort((a,b)=>{return (a.price.price > b.price.price)?-1:1})
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
