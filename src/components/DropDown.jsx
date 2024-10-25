import axios from "axios";
import React, { useEffect, useState } from "react";

const DropDown = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [district, setDistrict] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    try {
      let result = await axios.get(
        "https://freeapi.miniprojectideas.com/api/youtube/GetAllCountry"
      );
      setCountries(result.data.data); // Assuming result.data.data is an array of countries
      console.log(result.data.data); // Log the countries data to the console
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  }
  async function getstate(e) {
    let result = await axios.get(
      "https://freeapi.miniprojectideas.com/api/youtube/GetAllStateByCountryId?id=" +
        e.target.value
    );
    setStates(result.data.data);
  }
  async function getcity(e) {
    let result = await axios.get(
      "https://freeapi.miniprojectideas.com/api/youtube/GetAllCitiesByDistrictId" +
        e.target.value
    );
    setDistrict(result.data.data);
  }

  return (
    <div>
      <h1>DropDown</h1>
      <select
        defaultValue="select"
        onChange={(e) => getstate(e)} // Log the selected country ID
      >
        <option disabled value="select">
          Select country
        </option>
        {countries.map((item) => (
          <option key={item.countryId} value={item.countryId}>
            {item.countryName}
          </option>
        ))}
      </select>

      {/* Placeholder for future use if needed */}
      <select onChange={(e) => getdistrict(e)}>
        {states.map((state) => (
          <option>{state.stateName}</option>
        ))}
      </select>
      <select onChange={(e) => getcity(e)}>
        {district.map((city) => (
          <option>{city.districtName}</option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
