import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ProductListing from './components/ProductListing';

class App extends Component {
  render() {
    return (
      <div className="productlist">
        <div className="header">
          <h2>Welcome to My Products</h2>
        </div>
        <div className="productlistblock">
          <ProductListing />
        </div>
      </div>
    );
  }
}

export default App;
