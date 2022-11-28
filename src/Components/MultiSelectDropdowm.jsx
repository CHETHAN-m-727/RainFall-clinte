import React, { useEffect, useState } from "react";
import { getYears, getCities, getCalender } from "../api/api";
import BarChart from "./BarChart";
import "./FetchYear.css";
import MultiSelect from "multiselect-react-dropdown";

const initialChartData = {
  labels: [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sept",
    "oct",
    "nov",
    "decs",
  ],
  datasets: [],
};

function MultiSelectDropdowm() {
  const [yearData, setYearData] = useState([]);
  const [year, setYear] = useState("");
  const [citydata, setCityData] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);

  const [barChartData, setBarChartData] = useState(initialChartData);

  //city name &year
  useEffect(() => {
    getYears().then((years) => {
      setYearData(years);
      setYear(years[0]);
    });
    getCities().then((cities) => {
      setCityData(
        cities.map((city, index) => ({
          name: city,
          id: index,
        }))
      );
    });
  }, []);

  const setCities = (list) => setSelectedCities([...list]);

  //calender
  const getCal = () => {
    setBarChartData(initialChartData);
    selectedCities.map((city) => {
      getCalender(city.name, year).then((data) => {
        setBarChartData((prevValue) => {
          const datasets = [
            ...prevValue.datasets,
            {
              label: city.name,
              data: data[0],
              backgroundColor: [
                `rgba(${Math.floor(Math.random() * 267)}, ${Math.floor(
                  Math.random() * 257
                )}, ${Math.floor(Math.random() * 257)}, 1)`,
              ],
              borderColor: "black",
              borderWidth: 2,
            },
          ];
          return {
            ...prevValue,
            datasets,
          };
        });
      });
    });
  };
  return (
    <div className="main">
      <div>
        <select onChange={(e) => setYear(e.target.value)}>
          {yearData.map((year, index) => (
            <option key={index} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className=" multiSelect">
        <MultiSelect
          options={citydata}
          onSelect={setCities}
          displayValue="name"
          onRemove={setCities}
        />
      </div>

      {/* calenderdata */}
      <button className="submit" onClick={getCal}>
        submit
      </button>

      {barChartData.datasets.length !== 0 && (
        <BarChart chartData={barChartData} />
      )}
    </div>
  );
}

export default MultiSelectDropdowm;
