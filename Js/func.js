function getRandom(min,max,f) {
    if (f == true){
        return Math.floor(Math.random()*(max - min + 1)) + min + Math.random();
    }
    return Math.floor(Math.random()*(max - min + 1)) + min;
    
}

console.log("Bienvenido!");

const enviar = () => {
    // id (string)
    const ideInput = document.getElementById("id");
    let ide = ideInput.value;
    console.log("\n\nId: ", ide);

    // Date
    let currentDate = new Date();
    let cDay = currentDate.getDate();
    let cMonth = currentDate.getMonth() + 1;
    let cYear = currentDate.getFullYear();
    let date = cDay + "/" + cMonth + "/" + cYear;
    console.log(date);

    // Time
    let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    console.log(time);

    // latent space (array)
    let i = 0;
    let ls = [];

    for (i; i <= 32; i++){
        ls[i] = Math.random();
    }
    console.log("Latent space: ",ls);

    // Position (array) (coordinates)
    let pos = [getRandom(-90,90,true).toFixed(5), getRandom(-180,180,true).toFixed(5)];

    console.log("Position: ", pos);

    // Height (float) (meters)
    let height = getRandom(0,15,true).toFixed(2);
    console.log("Height: ", height);

    // Temperature (float) (°C)
    let temper = getRandom(18,30,true).toFixed(2);
    console.log("Temperature: ", temper);

    // Humedad (float) (mm)
    let hum = getRandom(1000,1500,true).toFixed(2);
    console.log("Humidity: ", hum);

    // Wind speed (float) (knot)
    let wind = getRandom(16,40,false);
    console.log("Wind speed: ", wind);
}