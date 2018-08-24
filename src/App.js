import React, { Component } from 'react';
import SidePanel from './SidePanel';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            showInfoPanel: false
        }
    }

    toggleSidePanel(){
        this.setState({
            showInfoPanel: !this.state.showInfoPanel
        })
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            Click on the button below to toggle the view of the side panel
        </p>
          <button onClick={() => this.toggleSidePanel()}>Toggle</button>

          <SidePanel
              showPanel={this.state.showInfoPanel}
          />
      </div>
    );
  }
}

export default App;
