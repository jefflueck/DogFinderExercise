import React from 'react';
import { Link } from 'react-router-dom';
import './DogList.css';

const DogList = ({ dogs }) => {
  return (
    <div className="DogList">
      <h1 className="DogList-header">Our Current Dogs</h1>
      <ul className="DogList-ul">
        {dogs.map((dog) => (
          <li className="DogList-li" key={dog.name}>
            <Link className="DogList-link" to={`/dogs/${dog.name}`}>
              {dog.name}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default DogList;
