const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');
const locationData = document.querySelector('.location-data');

navigator.geolocation.watchPosition((data) => {
  console.log(data);
  speed.textContent = data.coords.speed;
  arrow.style.transform = `rotate(${data.altitude}deg)`;
  locationData.textContent = `Accuracy: ${data.coords.accuracy},
Altitude: ${data.coords.altitude},
Heading: ${data.coords.heading},
Latitude: ${data.coords.latitude},
Longitude: ${data.coords.longitude}`

}), (err) => {
  console.log(err);
  alert('¡Oye! Tienes que permitir eso para acceder a tu ubicación.')
}