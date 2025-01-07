import React, { useState } from "react";

const CountryStateSelector = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedStates, setSelectedStates] = useState([]);
  const [states, setStates] = useState([]);

  const countries = {
    USA: ["California", "Texas", "Florida", "New York"],
    Canada: ["Ontario", "Quebec", "British Columbia", "Alberta"],
    India: ["Maharashtra", "Karnataka", "Tamil Nadu", "Uttar Pradesh"],
    Australia: ["New South Wales", "Victoria", "Queensland", "Western Australia"],
    Germany: ["Bavaria", "Berlin", "Hamburg", "Saxony"]
  };

  const handleCountrySelect = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setStates(countries[country] || []);
    setSelectedStates([]);
  };

  const handleStateSelect = (e) => {
    const state = e.target.value;
    if (state && !selectedStates.includes(state)) {
      setSelectedStates([...selectedStates, state]);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <div>
        <select value={selectedCountry} onChange={handleCountrySelect}>
          <option value="" disabled>Select a country</option>
          {Object.keys(countries).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>

      {states.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <select onChange={handleStateSelect}>
            <option value="" disabled>Select a state</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
      )}

    </div>
  );
};

export default CountryStateSelector;
