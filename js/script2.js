"use strict";

(function() {
	var url = "http://api.openweathermap.org/data/2.5/weather?q=London,England";
    var httpRequest;

    // Make the api request:
    makeRequest();

    // Create and send XHR request.
    function makeRequest() {

      httpRequest = new XMLHttpRequest();
      httpRequest.onreadystatechange = responseMethod;   // When http request is ready, call responseMethod.
      httpRequest.open('GET', url + '&appid=' + apiKey);
      httpRequest.send();
    }

    // Handle XHR response.
    function responseMethod() {
      if (httpRequest.readyState === 4) {
        console.log(httpRequest.responseText);
      }
    }
})();