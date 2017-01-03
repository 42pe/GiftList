import React from 'react'
import { Router, Route, browserHistory } from 'react-router';
import ListPage from './pages/List'
import './App.css'

const App = React.createClass({
  render () {
    return (
      <Router history={browserHistory}>
        <div className='app'>
          <Route path='/' component={ListPage} />
        </div>
      </Router>
    )
  }
})

/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}*/

export default App;
