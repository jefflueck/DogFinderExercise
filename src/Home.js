import React from 'react';
import Nav from './Nav';
import './Home.css';

const Home = ({ dogs }) => {
  return (
    <>
      <div className="Home">
        <h1 className="Home-header">Welcome to the Dog App!</h1>
        <p className="Home-paragraph">Come see our Dogs</p>
        <button className="Home-button">
          <Nav dogs={dogs} />
        </button>
      </div>
    </>
  );
};

export default Home;
