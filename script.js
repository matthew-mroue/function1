"use strict";
function getAreaOfCircle(radius) {
    return Math.PI * Math.pow(radius, 2);
  }
  
  function getCircumferenceOfCircle(radius) {
    return 2 * Math.PI * radius;
  }
  
  function getAreaOfSquare(side) {
    return Math.pow(side, 2);
  }
  
  function getAreaOfTriangle(base, height) {
    return 0.5 * base * height;
  }
  
  console.log(getAreaOfCircle(4));
  console.log(getCircumferenceOfCircle(10));
  console.log(getAreaOfSquare(2));
  console.log(getAreaOfTriangle(4,8));
