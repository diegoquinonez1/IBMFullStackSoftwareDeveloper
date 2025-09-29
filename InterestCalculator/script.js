function compute() {
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;

  if (principal <= 0) {
    alert("Debe indicar un monto valido");
    document.getElementById("principal").focus();
    return;
  }

  if (rate <= 0) {
    alert("Debe indicar una tasa de interes valida");
    document.getElementById("rate").focus();
    return;
  }

  if (years <= 0 || years > 10) {
    alert("Debe indicar un numero de años valido");
    document.getElementById("years").focus();
    return;
  }

  var interest = (principal * years * rate) / 100;
  var amount = parseFloat(principal) + parseFloat(interest);
  var year = new Date().getFullYear() + parseInt(years);

  var result =
    "Si depositas <mark>" +
    principal +
    "</mark>,<br> a un interes de <mark>" +
    rate +
    "%</mark>.<br> En el plazo de <mark>" +
    years +
    "</mark> años, <br> Recibirás un total de <mark>" +
    amount +
    "</mark>,<br> en el año <mark>" +
    year +
    "</mark>";

  document.getElementById("result").innerHTML = result;
}

function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval + " %";
}

function updateYears() {
  var years = document.getElementById("years").value;
  var year = new Date().getFullYear() + parseInt(years);
  document.getElementById("year_val").innerText = year;
}

document.getElementById("rate").addEventListener("input", updateRate);
updateRate();
document.getElementById("years").addEventListener("input", updateYears);
updateYears();

compute();
