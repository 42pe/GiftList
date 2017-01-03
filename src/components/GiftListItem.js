import React from 'react'
import Currencies from '../data/currency.json'

const GiftListItem = React.createClass({
  applyInfoTemplate (data, tag, appendTags) {
    const hasData = ((data !== undefined) && (data !== false))
    const returnTag = (hasData) ? tag : null
    if (hasData) {
      appendTags.unshift(returnTag)
      return appendTags
    } else {
      appendTags = appendTags.map((elem) => {
        return null
      })
      appendTags.unshift(returnTag)
      return appendTags
    }
  },
  render () {
    const templatedLocation = this.applyInfoTemplate( this.props.locationName,
                                           <span className="location"><i className="icon-small fa fa-map-marker"></i> {this.props.locationName}</span>,
                                           [<br />])
    const templatedSimilar = this.applyInfoTemplate( this.props.allowSimilar,
                                          <span className="replace"><i className="icon-small fa fa-refresh"></i> This or similar</span>,
                                          [<br />])
    const templatedRemainder = this.applyInfoTemplate( this.props.total - this.props.committed,
                                          <span className="qty"><i className="icon-small fa fa-plus-circle"></i> Want {this.props.total - this.props.committed} more <br/><span className="already-committed text-faded text-smaller">{this.props.committed}</span></span>,
                                          [<br />])
    const remainder = ((this.props.total - this.props.committed) > 1) ? " " + (this.props.total - this.props.committed).toString() : null
    const giveLessBtn = ((this.props.total - this.props.committed) > 1) ? <a href="#" className="give-less-link">give less than {remainder}</a> : null
    const currency = Currencies[this.props.price.currency].symbol
    return (
      <div className="u_gift-item col-xs-12 col-sm-6 col-md-4">
        <div className="image-container rounded" style={{backgroundImage:'url(\'http://images.landofnod.com/is/image/LandOfNod/Crib_Anderson_Walnut_V1/$web_setitem$/130831065716/andersen-crib-american-walnut.jpg\')'}}>
          <img src="http://images.landofnod.com/is/image/LandOfNod/Crib_Anderson_Walnut_V1/$web_setitem$/130831065716/andersen-crib-american-walnut.jpg" alt="Product" />
        </div>
        <h3 className="title">{this.props.name}</h3>
        <hr/>
        <div className="item-content row">
          <div className="info col-xs-12 col-sm-12 col-md-12 col-lg">
            {templatedLocation[0]}{templatedLocation[1]}
            {templatedSimilar[0]}{templatedSimilar[1]}
            {templatedRemainder[0]}{templatedRemainder[1]}
            <a href="#" className="details-link" data-toggle="modal" data-target="#giftDetails">see details</a>
          </div>
          <div className="actions col-xs-12 col-sm-12 col-md-12 col-lg text-lg-right">
            <h5 className="price lg"><i className="icon-small fa fa-tag"></i> {currency}{this.props.price.price}</h5>
            <div className="give-default">
              <button type="button" className="btn btn-cta" data-toggle="modal" data-target="#giftModal"><i className="icon-big fa fa-gift"></i> Give{remainder}!</button><br/>
              {giveLessBtn}
            </div>
            <div className="give-less">
              <div className="input-group">
                <span className="input-group-btn">
                  <button className="btn btn-secondary btn-cta" type="button"><i className="icon-big fa fa-gift"></i> Give</button>
                </span>
                <input type="text" className="form-control" placeholder="?" value={this.props.total - this.props.committed} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

export default GiftListItem
