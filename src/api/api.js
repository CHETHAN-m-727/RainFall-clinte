const url = "http://localhost:8080/api";

export function getCities() {
  return fetch(`${url}/Citycontact/all`).then((res) => res.json());
}

export function getYears() {
  return fetch(`${url}/rainfall/all`).then((res) => res.json());
}

export function getCalender(city, yeay) {
  return fetch(`${url}/city/log/all/${city}/${yeay}`).then((res) => res.json());
}
