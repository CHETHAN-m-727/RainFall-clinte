import React, { useEffect, useState } from "react";
import { getCalender } from "../api/api";

function FetchCalender() {
  const [setCalenderdata] = useState([]);

  useEffect(() => {
    getCalender().then((calender) => setCalenderdata(calender));
  }, [setCalenderdata]);

  return <></>;
}

export default FetchCalender;
