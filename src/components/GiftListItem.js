import React from 'react'
import Currencies from '../data/currency.json'

const GiftListItem = React.createClass({
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
  renderRemainderInfo () {
    if ((this.props.total - this.props.committed) > 1) {
      return <span className="qty"><i className="icon-small fa fa-plus-circle"></i> Want {this.props.total - this.props.committed} more <br/><span className="already-committed text-faded text-smaller">{this.props.committed}</span></span>
    } else {
      if ((this.props.total - this.props.committed) === 0) {
        return <span className="qty"><span className="already-committed text-faded text-smaller">All</span></span>
      } else {
        return null
      }
    }
  },
  renderCommittedByUser() {
    const message = (this.props.committedByUser === this.props.total) ? `You committed to these` : `You committed to ${this.props.committedByUser}`
    const markup = <div className="self-committed-info col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <div className="self-committed rounded">
        <span>{message}</span><br/>
        <a href="#">Click here to change</a>
      </div>
    </div>
    if ((this.props.committedByUser !== undefined) && (this.props.committedByUser > 0)) {
      return markup
    } else {
      return null
    }
  },
  renderIsCommitted() {
    if ((this.props.total - this.props.committed) === 0) {
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
    const locationInfo = this.renderLocationInfo()
    const similarInfo = this.renderSimilarInfo()
    const remainderInfo = this.renderRemainderInfo()
    const isCommitted = this.renderIsCommitted()
    const remainder = ((this.props.total - this.props.committed) > 1) ? " " + (this.props.total - this.props.committed).toString() : null
    const giveLessBtn = ((this.props.total - this.props.committed) > 1) ? <a href="#" className="give-less-link">give less than {remainder}</a> : null
    const currency = Currencies[this.props.price.currency].symbol
    const committedByUser = this.renderCommittedByUser()
    return (
      <div className={`u_gift-item col-xs-12 col-sm-6 col-md-4 ${isCommitted}`}>
        <div className="image-container rounded" style={{backgroundImage:'url(\'http://images.landofnod.com/is/image/LandOfNod/Crib_Anderson_Walnut_V1/$web_setitem$/130831065716/andersen-crib-american-walnut.jpg\')'}}>
          <img src="http://images.landofnod.com/is/image/LandOfNod/Crib_Anderson_Walnut_V1/$web_setitem$/130831065716/andersen-crib-american-walnut.jpg" alt="Product" />
        </div>
        <h3 className="title">{this.props.name}</h3>
        <hr/>
        <div className="item-content row">
          {committedByUser}
          <div className="info col-xs-12 col-sm-12 col-md-12 col-lg">
            {locationInfo}{(locationInfo !== null)?<br/>:null}
            {similarInfo}{(similarInfo !== null)?<br/>:null}
            {remainderInfo}{(remainderInfo !== null)?<br/>:null}
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
