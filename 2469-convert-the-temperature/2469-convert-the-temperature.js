/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    "use strict"
    let kelvin = celsius + 273.15
 let fahrenheit = celsius * 1.80 + 32.00
  return [kelvin,fahrenheit]
};