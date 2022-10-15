import React, { Component } from 'react';
import SideBar from './components/side-bar/side-bar';
import MainPage from './components/main-page/main-page';
import MedianCalculator from './components/median-calculator/median-calculator';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <SideBar />
        </div>

        <div>
          <MainPage />
        </div>

        <div>
          <MedianCalculator />
        </div>
      </div>
    );
  }
}

export default App;
