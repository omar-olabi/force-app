import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Search from './components/Search';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Search />
    </div>
  );
};

export default App;
