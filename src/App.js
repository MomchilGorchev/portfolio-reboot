import React, { Component } from 'react';
import './App.css';

import { Space } from './util/mainCanvas'

class App extends Component {

  componentDidMount () {
    Space()
  }
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <canvas id='welcome' />
          <p class='placeholder-text'>
            LANDING SOON
          </p>
          <span className='telemetry right'>
            <span className='metric'>
              PRESSURE: <span className='green'>optimal</span>
            </span>
            <br />
            <span className='metric'>
              TRAJECTORY: <span className='green'>optimal</span>
            </span>
            <br />
            <span className='metric'>
              FUEL: <span className='orange'>57%</span>
            </span>
          </span>
          <span className='telemetry left'>
            <span className='metric'>
              LOCATION: <span className='green'>In transition</span>
            </span>
            <br />
            <span className='metric'>
              DESTINATION: <span className='green'>Proxima B UFH27679-9</span>
            </span>
            <br />
            <span className='metric'>
              SPEED: <span className='green'>optimal</span>
            </span>
          </span>
        </header>
      </div>
    );
  }
}

export default App;
