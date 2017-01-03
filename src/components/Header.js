import React from 'react'

const Header = React.createClass({
  render () {
    return (
      <header className="container-fluid main-header">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="jumbotron">
                <h1 className="display-3">Gift List</h1>
                <p className="lead">Pick a gift from the list</p>
                <hr className="my-2" />
                <p>This page is the list of gifts someone wants to be given.</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
});

export default Header
