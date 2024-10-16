import { useState } from "react";
import "./country.css";

const Country = ({ country, handelVisitedFlag }) => {
  const { name, flags, population, area, cca3 } = country;
  const [visited, setVisited] = useState(false);
  const handelVisited = (country) => {
    setVisited(!visited);
    handelVisitedFlag(country);
  };
  return (
    <div className={`Box ${visited && "visited"}`}>
      <h4>Country Name : {name?.common}</h4>
      <img src={flags.png} alt="Flag.png" />
      <p>Population : {population}</p>
      <p>Area : {area}</p>
      <p>
        <small>CCA3 Code : {cca3}</small>
      </p>
      <button onClick={() => handelVisited(country)}>
        {visited ? "Visited" : "Wanna Go"}
      </button>
      {visited
        ? "I have visited this country."
        : "I want to visite this country."}
    </div>
  );
};

export default Country;
