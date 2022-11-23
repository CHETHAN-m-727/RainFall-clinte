// import React, { useEffect, useState } from "react";
// import { getYears, getCities, getCalender } from "../api/api";
// import BarChart from "./BarChart";
// import "./FetchYear.css";

// function FetchYear() {
//   const [yearData, setYearData] = useState([]);
//   const [year, setYear] = useState("");
//   const [citydata, setCityData] = useState([]);
//   const [cityName, setcityName] = useState();
//   const [barChartData, setBarChartData] = useState({
//     labels: [
//       "jan",
//       "feb",
//       "mar",
//       "apr",
//       "may",
//       "jun",
//       "jul",
//       "aug",
//       "sept",
//       "oct",
//       "nov",
//       "decs",
//     ],
//     datasets: [
//       {
//         label: "Rain Rate(mm)",
//         data: [],
//         backgroundColor: [
//           "rgba(75, 192, 192, 1)",
//           "#50AF95",
//           "#f3ba2f",
//           "#2a71d0",
//         ],
//         borderColor: "black",
//         borderWidth: 2,
//       },
//       {
//         label: "Rain Rate(mm)",
//         data: [],
//         backgroundColor: [
//           "rgba(75, 192, 192, 1)",
//           "#50AF95",
//           "#f3ba2f",
//           "#2a71d0",
//         ],
//         borderColor: "black",
//         borderWidth: 2,
//       },
//       {
//         label: "Rain Rate(mm)",
//         data: [],
//         backgroundColor: [
//           "rgba(75, 192, 192, 1)",
//           "#50AF95",
//           "#f3ba2f",
//           "#2a71d0",
//         ],
//         borderColor: "black",
//         borderWidth: 2,
//       },
//       {
//         label: "Rain Rate(mm)",
//         data: [],
//         backgroundColor: [
//           "rgba(75, 192, 192, 1)",
//           "#50AF95",
//           "#f3ba2f",
//           "#2a71d0",
//         ],
//         borderColor: "black",
//         borderWidth: 2,
//       },
//     ],
//   });

//   useEffect(() => {
//     getYears().then((years) => {
//       setYearData(years);
//       setYear(years[0]);
//     });
//     getCities().then((cities) => {
//       setCityData(cities);
//       setcityName(cities[0]);
//     });
//   }, []);

//   const getCal = () => {
//     getCalender(cityName, year).then((data) => {
//       setBarChartData((prevValue) => {
//         const datasets = [...prevValue.datasets];
//         datasets[0].data = data[0];
//         return {
//           ...prevValue,
//           datasets,
//         };
//       });
//     });
//   };
//   return (
//     <div className="main">
//       <div>
//         <select
//           className="year_cityOption"
//           onChange={(e) => setYear(e.target.value)}
//         >
//           {yearData.map((year, index) => (
//             <option key={index} value={year}>
//               {year}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div>
//         <select
//           // multiple
//           className="year_cityOption"
//           onChange={(e) => setcityName(e.target.value)}
//         >
//           {citydata.map((city, index) => (
//             <option key={index} value={city}>
//               {city}
//             </option>
//           ))}
//         </select>
//       </div>
//       <button className="submit" onClick={getCal}>
//         submit
//       </button>
//       {barChartData.datasets[0].data.length !== 0 && (
//         <BarChart chartData={barChartData} />
//       )}
//     </div>
//   );
// }

// export default FetchYear;
