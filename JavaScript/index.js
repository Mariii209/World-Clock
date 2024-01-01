function timeZoneDateAndTime() {
  //Los Angeles current date and time
  let losAngelesCityElement = document.querySelector("#losAngeles");
  if (losAngelesCityElement) {
    let losAngelesDateElement =
      losAngelesCityElement.querySelector("#losAngeles-date");
    let losAngelesTimeElement =
      losAngelesCityElement.querySelector("#losAngeles-time");

    losAngelesDateElement.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("MMMM D, YYYY");
    losAngelesTimeElement.innerHTML = `${moment()
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

function selectingCity() {
  let citiesDropDownSelect = document.querySelector(".dropdown-cities");
  let cityInterfaceElement = document.querySelector(".city");

  let cityTimeZone = citiesDropDownSelect.value;
  if (cityTimeZone.length > 0) {
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
    let cityname = cityTimeZone.split("/")[1].replace("_", " ");
    let cityDate = moment().tz(cityTimeZone).format("MMMM D, YYYY");
    let cityTime = `${moment()
      .tz(cityTimeZone)
      .format("h:mm:ss")} <small class="am-pm"> ${moment()
      .tz(cityTimeZone)
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
              </div>
              <a href="/">Cities</a>`;
  }
}

setInterval(selectingCity, 1000);

setInterval(timeZoneDateAndTime, 1000);
