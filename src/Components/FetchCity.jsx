// import React, { useEffect, useState } from "react";
// import { getCities } from "../api/api";

// function FetchCity() {
//   const [citydata, setCityData] = useState([]);
//   const [cityName, setcityName] = useState("");

//   useEffect(() => {
//     getCities().then((cities) => setCityData(cities));
//   }, []);

//   useEffect(() => {
//     console.log(cityName);
//   }, [cityName]);

//   return (
//     <div>
//       <select onChange={(e) => setcityName(e.target.value)}>
//         {citydata.map((city, index) => (
//           <option key={index} value={city}>
//             {city}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }

// export default FetchCity;
