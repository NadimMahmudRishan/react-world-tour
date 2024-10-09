import "./country.css";

const Country = ({ country }) => {
  const { name, flags, population, area, cca3 } = country;
  return (
    <div className="Box">
      <h4>Country Name : {name?.common}</h4>
      <img src={flags.png} alt="Flag.png" />
      <p>Population : {population}</p>
      <p>Area : {area}</p>
      <p><small>CCA3 Code : {cca3}</small></p>
      <button>Visited</button>
    </div>
  );
};

export default Country;
