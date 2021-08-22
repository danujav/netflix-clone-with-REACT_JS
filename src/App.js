import React from 'react';
import  Row  from './Row'
import './App.css';
import requests from './requests';

function App() {
    return (
    <div className="App">
      <h1>Hey let's build netflix-clone</h1>
      <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />

    </div>
  );
}

export default App;

