import React from 'react'
import GiftListItem from './GiftListItem'

const GiftList = React.createClass({
  render () {
    return (
      <main className="container u_gift-list">
        <div className="row">
          {this.props.gifts
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
              return (<GiftListItem key={gift.id} {...gift} />)
            })}
        </div>
      </main>
    )
  }
});

export default GiftList
