import { useEffect, useState } from "react";
import Country from "../country/Country";
import "./countries.css";

const Countries = () => {
  const [contries, setContries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setContries(data));
    // .then (data=>console.log(data[0]))
  }, []);
  return (
    <>
      {" "}
      <h2>Total Contries : {contries.length}</h2>
      <div className="container">
        {contries.map((country) => (
          <Country key={country.car.cca3} country={country}></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
