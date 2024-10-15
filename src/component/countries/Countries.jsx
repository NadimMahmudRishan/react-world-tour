import { useEffect, useState } from "react";
import Country from "../country/Country";
import "./countries.css";

const Countries = () => {
  const [contries, setContries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setContries(data));
  }, []);

  const [visitedFlag, setVisitedFlag] = useState([]);
  const handelVisitedFlag = (country) => {
    console.log(country);
    const NewVisitedFlag = [...visitedFlag, country];
    setVisitedFlag(NewVisitedFlag);
  };
  return (
    <>
      <h2>Visited Countries : {visitedFlag.length}</h2>

      <ul>
        {visitedFlag.map((country) => (
          <div>
            <div>
              {country.name.common}
              <br />
              <img src={country.flags.png} alt="" />
            </div>
          </div>
        ))}
      </ul>

      <h2>Total Contries : {contries.length}</h2>
      <div className="container">
        {contries.map((country) => (
          <Country
            key={country.car.cca3}
            country={country}
            handelVisitedFlag={handelVisitedFlag}
          ></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
