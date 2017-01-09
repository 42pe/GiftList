import React from 'react'
const { string, bool, number, shape, arrayOf } = React.PropTypes
import Currencies from '../data/currency.json'

const GiftListItem = React.createClass({
  propTypes: {
    name: string.isRequired,
    locationName: string,
    allowSimilar: bool,
    isCommitted: bool.isRequired,
    qty: number.isRequired,
    price: shape({
      price: number.isRequired,
      currency: string.isRequired
    }).isRequired,
    imgs: arrayOf(shape({
      url: string.isRequired
    })).isRequired
  },
  renderLocationInfo () {
    if (this.props.locationName !== undefined) {
      return <span className="location"><i className="icon-small fa fa-map-marker"></i> {this.props.locationName}</span>
    } else {
      return null
    }
  },
  renderSimilarInfo () {
    if (this.props.allowSimilar) {
      return <span className="replace"><i className="icon-small fa fa-refresh"></i> This or similar</span>
    } else {
      return null
    }
  },
  renderCommittedByUser() {
    const markup = <div className="self-committed-info col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <div className="self-committed rounded">
        <span>This is your gift!</span><br/>
        <a href="#">Click here to change</a>
      </div>
    </div>
    if (this.props.committedByUser) {
      return markup
    } else {
      return null
    }
  },
  renderQty() {
    return (this.props.qty > 1) ? (<span className="qty"><i className="icon-small fa fa-shopping-bag"></i> Bundle of {this.props.qty}</span>) : null
  },
  renderIsCommitted() {
    if (this.props.isCommitted) {
      return "isCommitted"
    } else {
      if ((this.props.committedByUser !== undefined) && (this.props.committedByUser > 0)) {
        return "isCommitted"
      } else {
        return null
      }
    }
  },
  render () {
    const qtyInfo = this.renderQty()
    const locationInfo = this.renderLocationInfo()
    const similarInfo = this.renderSimilarInfo()
    const isCommitted = this.renderIsCommitted()
    const currency = Currencies[this.props.price.currency].symbol
    const committedByUser = this.renderCommittedByUser()
    return (
      <div className={`u_gift-item col-xs-12 col-sm-6 col-md-4 ${isCommitted}`}>
        <div className="image-container rounded" style={{backgroundImage:`url('${this.props.imgs[0].url}')`}}>
          <img src={this.props.imgs[0].url} alt="Item" />
        </div>
        <h3 className="title">{this.props.name}</h3>
        <hr/>
        <div className="item-content row">
          {committedByUser}
          <div className="info col-xs-12 col-sm-12 col-md-12 col-lg">
            {locationInfo}{(locationInfo !== null)?<br/>:null}
            {qtyInfo}{(qtyInfo !== null)?<br/>:null}
            {similarInfo}{(similarInfo !== null)?<br/>:null}
            <a href="#" className="details-link" data-toggle="modal" data-target="#giftDetails">see details</a>
          </div>
          <div className="actions col-xs-12 col-sm-12 col-md-12 col-lg text-lg-right">
            <h5 className="price lg"><i className="icon-small fa fa-tag"></i> {currency}{this.props.price.price}</h5>
            <div className="give-default">
              <button type="button" className="btn btn-cta" onClick={this.props.onGiveClick}><i className="icon-big fa fa-gift"></i> Give!</button><br/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

export default GiftListItem
