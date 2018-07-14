import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Homepage from './containers/Homepage';

import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Homepage />
        </div>
      </Provider>
    );
  }
}

export default App;
