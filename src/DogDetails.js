import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './DogDetails.css';

const DogDetails = ({ dogs }) => {
  const { name } = useParams();
  const dogDetails = dogs.find((dog) => dog.name === name);
  console.log(dogDetails);
  return (
    <div className="DogDetails">
      <h1 className="DogDetails-header">Name: {dogDetails.name}</h1>
      <img src={dogDetails.src} />
      <p className="DogDetails-p-tag">Age: {dogDetails.age}</p>
      <p className="DogDetails-p-tag">Some of Things About me:</p>
      <ul className="DogDetails-facts">
        {dogDetails.facts.map((fact) => {
          return <li>{fact}</li>;
        })}
      </ul>
      <div className="DogDetails-nav">
        <Link to="/dogs">
          <button className="DogDetails-buttons">Dogs</button>
        </Link>
        <Link to="/">
          <button className="DogDetails-buttons">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default DogDetails;
