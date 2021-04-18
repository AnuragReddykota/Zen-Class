// Solving problems using array functions on rest countries data.

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.eu/rest/v2/all", true);
request.send();
request.onload = function () {
  var country = JSON.parse(this.response);
  // - Get all the countries from Asia continent /region using Filter function
  var countryRegion = country.filter((element) => {
    return element.region === "Asia";
  });
  var countryNames = countryRegion;
  var countryName = countryNames.map((element) => {
    console.log(element.name);
  });
  //  - Get all the countries with population of less than 2 lacs using Filter function
  var countryPopulation = country.filter((element) => {
    return element.population < 200000;
  });
  var countryPeople = countryPopulation;
  var poplePopulation = countryPeople.map((element) => {
    console.log(element.name);
  });
  //  - Print the following details name, capital, flag using forEach function
  country.forEach((element) => {
    console.log(element.name, element.capital, element.flag);
  });
  // - Print the total population of countries  reduce function
  var totalPopulation = country.reduce((Population, element) => {
    return element.population + Population;
  }, 0);
  console.log("Total Population of countries : " + totalPopulation);
  // - Print the country which use US Dollars as currency.
  var usdCurrency = country.filter((element) => {
    return element.currencies[0].code === "USD";
  });
  var usdcountry = usdCurrency.map((element) => {
    console.log(element.name);
  });

};
