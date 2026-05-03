async function w() {
    const city = document.querySelector('#search > input').value;
    
    if (city === "") {
        alert("Please enter city name");
    } else {
        const apikey = "6626f3870c8fd64ddbacbe076caf124b";
        const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apikey}`;
        
        try {
            let res = await fetch(url);
            if (!res.ok) {
                throw new Error('City not found');
            }

            let data = await res.json();
            
            // Update temperature, city, wind speed, and humidity
            document.getElementById('temp').innerHTML = Math.round(data.main.temp);
            document.getElementById('city').innerHTML = data.name;
            document.getElementById('wind').innerHTML = data.wind.speed + " Km/h";
            document.getElementById('humidity').innerHTML = data.main.humidity + "%";
            
            // Get the detailed weather description and main condition
            let weatherCondition = data.weather[0].main;
            let weatherDescription = data.weather[0].description;
            
            // Update the weather icon based on the detailed description
            let weatherIcon = document.getElementById('weather-icon');
            if (weatherDescription === "clear sky") {
                weatherIcon.src = "./img/clear.png";
            } else if (weatherDescription === "few clouds" || weatherDescription === "scattered clouds") {
                weatherIcon.src = "./img/clouds.png";
            } else if (weatherDescription === "broken clouds" || weatherDescription === "overcast clouds") {
                weatherIcon.src = "./img/cloudy.png";
            } else if (weatherDescription === "shower rain" || weatherDescription === "light rain") {
                weatherIcon.src = "./img/drizzle.png";
            } else if (weatherDescription === "moderate rain" || weatherDescription === "heavy intensity rain") {
                weatherIcon.src = "./img/rain.png";
            } else if (weatherCondition === "Snow") {
                weatherIcon.src = "./img/snow.png";
            } else if (weatherDescription === "haze") {
                weatherIcon.src = "./img/haze.png";
            } else if (weatherDescription === "mist") {
                weatherIcon.src = "./img/mist.png";
            } else {
                weatherIcon.src = "./img/default.png";
            }
            
            // Update the weather description text
            document.getElementById('weather-description').innerHTML = weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);
        } catch (error) {
            alert("Error: " + error.message);
        }
    }
}
