const API_KEY = '1390971f47fb2409eb827c81db77e414';

export function getWeather(city) {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => data);
}