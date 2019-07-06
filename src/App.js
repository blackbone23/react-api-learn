import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop'
import Users from './components/Users';
import Products from './components/Products';
import Home from './components/Home';

class App extends Component{

  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen : !prevState.sideDrawerOpen}
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if(this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div style={{height: '100%'}}>
        <BrowserRouter>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{marginTop: '64px'}}>
          <p>This is the page content!</p>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/products" exact component={Products} />
              <Route path="/users" exact component={Users} />
            </Switch>
          
        </main>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
