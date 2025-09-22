function GetFahrenheit() {
    var txtCesius = document.getElementById("celsius");
    var celsius = parseFloat(txtCesius.value);
    if (isNaN(celsius)) {
        alert("Please enter a valid number for celcius.");
        return;
    }
    
    var fahrenheit = (celsius * 9/5) + 32;
    var txtFahrenheit = document.getElementById("fahrenheit");
    txtFahrenheit.value = fahrenheit.toFixed(2);
}

function GetWeight() {
    var txtkilo = document.getElementById("kilo");
    var kilo = parseFloat(txtkilo.value);
    if (isNaN(kilo)) {
        alert("Please enter a valid number for Weight.");
        return;
    }
    
    var weight = kilo * 2.2;
    var txtWeight = document.getElementById("pounds");
    txtWeight.value = weight.toFixed(2);
}

function GetDistance() {
    var txtkm= document.getElementById("km");
    var km = parseFloat(txtkm.value);
    if (isNaN(km)) {
        alert("Please enter a valid number for Distance.");
        return;
    }
    
    var miles = km * 0.62137;
    var txtFahrenheit = document.getElementById("miles");
    txtFahrenheit.value = miles.toFixed(2);
}