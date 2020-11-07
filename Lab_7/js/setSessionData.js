const main = document.getElementById("main");

function getBusRoute() {
  let busRoute = document.getElementById("Bus Route").value; // Your code here

  if ((typeof busRoute !== "undefined") & (busRoute !== "")) {
    let busRouteLink = "https://api.umd.io/v0/bus/routes/" + busRoute; // Your code here

    fetch(busRouteLink)
      .then((results) => {return results.json();})

      .then((route) => {
          let title = route.title;
          let latMax = route.lat_max;
          let latMin = route.lat_min;
          let lonMax = route.lon_max;
          let lonMin = route.lon_min;
          let nothing = "Nothing Set!";

          sessionStorage.setItem("title", title);
          sessionStorage.setItem("lat_max", latMax);
          sessionStorage.setItem("lat_min", latMin);
          sessionStorage.setItem("lon_max", lonMax);
          sessionStorage.setItem("lon_min", lonMin);

      })
      .catch((err) => {
        console.log(err);
        main.innerHTML = "Invalid bus route";
        sessionStorage.setItem("title", nothing);
        sessionStorage.setItem("lat_max", nothing);
        sessionStorage.setItem("lat_min", nothing);
        sessionStorage.setItem("lon_max", nothing);
        sessionStorage.setItem("lon_min", nothing);
      });
  } else {
    main.innerHTML = "No value provided";
    sessionStorage.setItem("title", nothing);
    sessionStorage.setItem("lat_max", nothing);
    sessionStorage.setItem("lat_min", nothing);
    sessionStorage.setItem("lon_max", nothing);
    sessionStorage.setItem("lon_min", nothing);
  }
}


