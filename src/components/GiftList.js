import React from 'react'
import GiftListItem from './GiftListItem'

const GiftList = React.createClass({
  render () {
    return (
      <main className="container u_gift-list">
        <div className="row">
          {this.props.gifts.map((gift)=>{
            return (<GiftListItem key={gift.id} {...gift} />)
          })}
        </div>
      </main>
    )
  }
});

export default GiftList
