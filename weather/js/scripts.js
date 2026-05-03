async function w() {
    const city = document.querySelector('#search>input').value;
    
    if (city == "") {
        alert("Please enter city name");
    } else {
        const apikey = "6626f3870c8fd64ddbacbe076caf124b";
        const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apikey}`;
        
        let res = await fetch(url);
        let data = await res.json();
        
        // Update temperature, city, wind speed, and humidity
        temp.innerHTML = Math.round(data.main.temp);
        document.getElementById('city').innerHTML = data.name;
        wind.innerHTML = data.wind.speed + "Km/h";
        humidity.innerHTML = data.main.humidity + "%";
        
        // Get the weather description
        let weatherCondition = data.weather[0].main;
        
        // Change the main image based on the weather condition
        let weatherIcon = document.getElementById('weather-icon');
        
        if (weatherCondition === "Clear") {
            weatherIcon.src = "./img/clear.png";  // Replace with the correct path to your 'clear' icon
        } else if (weatherCondition === "Clouds") {
            weatherIcon.src = "./img/clouds.png";  // Replace with the correct path to your 'clouds' icon
        } else if (weatherCondition === "Rain") {
            weatherIcon.src = "./img/rain.png";  // Replace with the correct path to your 'rain' icon
        } else if (weatherCondition === "Snow") {
            weatherIcon.src = "./img/mist.png";  // Replace with the correct path to your 'snow' icon
        } else if (weatherCondition === "Sunny") {
            weatherIcon.src = "./img/haze.png";  // Replace with the correct path to your 'sunny' icon
        } else {
            weatherIcon.src = "./img/clear.png";  // Default icon if none matches
        }
    }
}
