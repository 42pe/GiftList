import React from 'react'

const StatusBar = React.createClass({
  render () {
    return (
      <aside className="container-fluid u_gift-list-status-bar isShown">
        <div className="container">
          <div className="row flex-items-xs-between">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg">
              Committed to <b>3 items</b> for aproximately <b><i className="icon-small fa fa-tag"></i> $600</b>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg text-lg-right">
              <b>See:</b> <a className="active" href="#">All</a> | <a href="#">Committed</a> | <a href="#">Available</a>
            </div>
          </div>
        </div>
      </aside>
    )
  }
});

export default StatusBar
