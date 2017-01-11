import React from 'react'

const StatusBar = React.createClass({
  filterClick(ev) {
    this.props.changeFilter(ev.target.dataset.filtervalue)
  },
  renderButtons() {
    let allClass, committedClass, availableClass
    if (this.props.show === 'available') {
      availableClass = 'active'
    } else {
      if (this.props.show === 'committed') {
        committedClass = 'active'
      } else {
        allClass = 'active'
      }
    }
    return [
      <a className={allClass} href={`javascript:void(0)`} onClick={this.filterClick} data-filterValue={`all`}>All</a>,
      <a className={committedClass} href={`javascript:void(0)`} onClick={this.filterClick} data-filterValue={`committed`}>Committed</a>,
      <a className={availableClass} href={`javascript:void(0)`} onClick={this.filterClick} data-filterValue={`available`}>Available</a>
    ]
  },
  render () {
    const filterButtons = this.renderButtons()
    return (
      <aside className="container-fluid u_gift-list-status-bar isShown">
        <div className="container">
          <div className="row flex-items-xs-between">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg">
              Committed to <b>{this.props.committedQty} items</b> for aproximately <b><i className="icon-small fa fa-tag"></i> {this.props.baseCurrencySymbol} {this.props.committedTotalPrice.toFixed(2)}</b>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg text-lg-right">
              <b>See:</b> {filterButtons[2]} | {filterButtons[1]} | {filterButtons[0]}
            </div>
          </div>
        </div>
      </aside>
    )
  }
});

export default StatusBar
