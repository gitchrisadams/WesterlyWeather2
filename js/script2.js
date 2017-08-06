"use strict";

/****************************** JQuery way of using ajax ******************************/
(function() {
  var url = "http://api.openweathermap.org/data/2.5/weather?id=5225631";
  var httpRequest;

  $.get(url + '&appid=' + apiKey).done(function(response) {
    updateUISuccess(response);
  }).fail(function(error) {
    updateUIError(error);
  });

  /**
   * Update the ui when request is successful.
   * @param {Object} response - The json response text.
   */
  function updateUISuccess(response) {
  var condition = response.weather[0].main;

  // Temp from api comes in as Kelvin, so convert to degrees C.
  var degC = response.main.temp - 273.15;
  var degCInt = Math.floor(degC);
  var degF = degC * 1.8 + 32;
  var degFInt = Math.floor(degF);
  var weatherBox = document.getElementById("weather");
  weatherBox.innerHTML = "<p>" + 
    //degCInt + "&#176; C / " +
    degFInt + "&#176; F </p>" +
    "<p>" + condition + "</p>";
  }

/**
 * Update the ui when request is not successful.
 */
function updateUIError(error) {
  var weatherBox = document.getElementById("weather");
  weatherBox.className = "hidden";
}
})();

/****************************** Fetch request way of using ajax ******************************/
// (function() {
  // var url = "http://api.openweathermap.org/data/2.5/weather?q=London,England";
  // var httpRequest;

//   fetch(url + '&appid=' + apiKey).then(function(response) {
//     if (!response.ok) {
//       throw Error(response.status);
//     }
//     return response.json();
//   }).then(function(response) {
//     updateUISuccess(response);
//   }).catch(function(error) {
//     updateUIError(error);
//   });

  //   /**
  //  * Update the ui when request is successful.
  //  * @param {Object} response - The json response text.
  //  */
  // function updateUISuccess(response) {
  //   var condition = response.weather[0].main;

  //   // Temp from api comes in as Kelvin, so convert to degrees C.
  //   var degC = response.main.temp - 273.15;
  //   var degCInt = Math.floor(degC);
  //   var degF = degC * 1.8 + 32;
  //   var degFInt = Math.floor(degF);
  //   var weatherBox = document.getElementById("weather");
  //   weatherBox.innerHTML = "<p>" + 
  //     degCInt + "&#176; C / " +
  //     degFInt + "&#176; F </p>" +
  //     "<p>" + condition + "</p>";
  // }

  // /**
  //  * Update the ui when request is not successful.
  //  */
  // function updateUIError(error) {
  //   var weatherBox = document.getElementById("weather");
  //   console.log("Error");
  //   console.log(error);
  //   weatherBox.className = "hidden";
  // }
//})();

/***************************** XHR Request way of using ajax *********************************/
// (function() {
// 	var url = "http://api.openweathermap.org/data/2.5/weather?q=London,England";
//     var httpRequest;

//     // Make the api request:
//     makeRequest();

//     // Create and send XHR request.
//     function makeRequest() {

//       httpRequest = new XMLHttpRequest();
//       httpRequest.onreadystatechange = responseMethod;   // When http request is ready, call responseMethod.
//       httpRequest.open('GET', url + '&appid=' + apiKey);
//       httpRequest.send();
//     }

//     // Handle XHR response.
//     function responseMethod() {
//       if (httpRequest.readyState === 4) {
//         if (httpRequest.status === 200) {
//           updateUISuccess(httpRequest.responseText);
//         } else {
//           updateUIError();
//         }
//         console.log(httpRequest.responseText);
//       }
//     }


    // /**
    //  * Update the ui when request is successful.
    //  * @param {Object} responseText - The json response text.
    //  */
    // function updateUISuccess(responseText) {
    //   var response = JSON.parse(responseText);
    //   var condition = response.weather[0].main;

    //   // Temp from api comes in as Kelvin, so convert to degrees C.
    //   var degC = response.main.temp - 273.15;
    //   var degCInt = Math.floor(degC);
    //   var degF = degC * 1.8 + 32;
    //   var degFInt = Math.floor(degF);
    //   var weatherBox = document.getElementById("weather");
    //   weatherBox.innerHTML = "<p>" + 
    //     degCInt + "&#176; C / " +
    //     degFInt + "&#176; F </p>" +
    //     "<p>" + condition + "</p>";
    // }


    // /**
    //  * Update the ui when request is not successful.
    //  */
    // function updateUIError() {
    //   var weatherBox = document.getElementById("weather");
    //   weatherBox.className = "hidden";
    // }

//})();
