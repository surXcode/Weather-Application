//window.alert("Hello Suraj");
async function w(){
    //window.alert("Surajs");
    const city=document.querySelector('#search>input').value;
    //console.log(city);
    if(city==""){
alert("Please enter city name");

    }
    else{
        const apikey="6626f3870c8fd64ddbacbe076caf124b";
        const url=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apikey}`;

        let res=await fetch(url);
        console.log(res);
        let data=await res.json();
        console.log(data);
        temp.innerHTML=Math.round(data.main.temp);
        document.getElementById('city').innerHTML=data.name;
        wind.innerHTML=data.wind.speed+"Km/h";
        humidity.innerHTML=data.main.humidity+"%";
    }
        //console.log(city);
}




















