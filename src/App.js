import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ViewCart from './ViewCart';
import ProductList from './ProductList';

import './App.css';

function App() {
  

  return (
    <div className="App">
      <div className="contCls">
        <Router>
            <Routes>
                <Route exact path="/viewcart" element={<ViewCart/>}></Route>
                <Route exact path="/" element={<ProductList/>}/>
            </Routes>
        </Router>
      </div>
      
    </div>
  );
}

export default App;
