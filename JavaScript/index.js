function timeZoneDateAndTime() {
  //Modesto current date and time
  let modestoCityElement = document.querySelector("#modesto");
  if (modestoCityElement) {
    let modestoDateElement = modestoCityElement.querySelector("#modesto-date");
    let modestoTimeElement = modestoCityElement.querySelector("#modesto-time");

    modestoDateElement.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("MMMM D, YYYY");
    modestoTimeElement.innerHTML = `${moment()
      .tz("America/Los_Angeles")
      .format("h:mm:ss")} <small class="am-pm"> ${moment()
      .tz("America/Los_Angeles")
      .format("A")} </small>`;
  }

  //New York current date and time
  let newYorkCityElement = document.querySelector("#newYork");
  if (newYorkCityElement) {
    let newYorkDateElement = newYorkCityElement.querySelector("#newYork-date");
    let newYorkTimeElement = newYorkCityElement.querySelector("#newYork-time");

    newYorkDateElement.innerHTML = moment()
      .tz("America/New_York")
      .format("MMMM D, YYYY");
    newYorkTimeElement.innerHTML = `${moment()
      .tz("America/New_York")
      .format("h:mm:ss")} <small class="am-pm"> ${moment()
      .tz("America/New_York")
      .format("A")} </small>`;
  }

  //London current date and time
  let londonCityElement = document.querySelector("#london");
  if (londonCityElement) {
    let londonDateElement = londonCityElement.querySelector("#london-date");
    let londonTimeElement = londonCityElement.querySelector("#london-time");

    londonDateElement.innerHTML = moment()
      .tz("Europe/London")
      .format("MMMM D, YYYY");
    londonTimeElement.innerHTML = `${moment()
      .tz("Europe/London")
      .format("h:mm:ss")} <small class="am-pm"> ${moment()
      .tz("Europe/London")
      .format("A")} </small>`;
  }
}

setInterval(timeZoneDateAndTime, 1000);

function selectingCity(event) {
  let cityInterfaceElement = document.querySelector(".city");
  let cityname = event.target.value.split("/")[1].replace("_", " ");
  let cityDate = moment().tz(event.target.value).format("MMMM D, YYYY");
  let cityTime = `${moment()
    .tz(event.target.value)
    .format("h:mm:ss")} <small class="am-pm"> ${moment()
    .tz("Europe/London")
    .format("A")} </small>`;

  cityInterfaceElement.innerHTML = `<div class="current-timezone">
            <div>
              <h2 class="city-name">${cityname}</h2>
              <div class="current-date"> ${cityDate}
              </div>
            </div>
            <div class="current-time">
              ${cityTime}
            </div>
          </div>`;
}

let citiesDropDownSelect = document.querySelector(".dropdown-cities");
citiesDropDownSelect.addEventListener("change", selectingCity);
