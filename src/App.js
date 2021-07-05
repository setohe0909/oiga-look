import React, { Component } from 'react';
import Main from './components/main';

import { GeneralContext } from './context';
import state from './context/state';
import './App.css';

class App extends Component {
  state = {
    mounted: false,
  };

  componentDidMount() {
    this.setState({
      ...state(this, window),
      mounted: true,
    });
  }

  render() {
    return (
      <GeneralContext.Provider value={{ ...this.state }}>
        <div className="App">
          <Main key="app" />
        </div>
      </GeneralContext.Provider>
    );
  }
}

export default App;
