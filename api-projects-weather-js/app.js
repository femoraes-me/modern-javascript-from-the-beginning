// Instanciando objeto storage
const storage = new Storage();

// Pegando localização armazenada
const weatherLocation = storage.getLocationData();

// Instanciando objeto weather
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// Instanciando objeto UI
const ui = new UI();

// Pegar clima ao carregar DOM
document.addEventListener('DOMContentLoaded', getWeather);

// evento para mudar localização
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    weather.changeLocation(city, state);
    storage.setLocationData(city, state);

    getWeather();

    // Fechar o Modal
    $('#locModal').modal('hide');
});

function getWeather() {
    weather.getWeather()
        .then(results => {ui.paint(results)})
        .catch(err => {console.log(err)});
}

