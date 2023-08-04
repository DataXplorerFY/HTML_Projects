// Write a program to initialize an array with city names. Copy 3 array elements from cities array to selected cities array.

var cityNames=["Faisalabad","Lahore","islamabad","Karachi","Toronto"];

document.write("Cities List:<br> ",cityNames);

var selectedCities= cityNames.slice(0,4);
document.write("<br>Selected Cities Are: <br>",selectedCities);






var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// Create a new Set from the array to automatically remove duplicates
var uniqueSet = new Set(arr1);

// Convert the Set back to an array using Array.from() method or spread operator
var uniqueArray = Array.from(uniqueSet); // OR var uniqueArray = [...uniqueSet];

// Display the uniqueArray in the browser
document.write("<h2>Sample Output:</h2>");
document.write(uniqueArray);






// We have the following arrays:
// var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
// var o = ["th","st","nd","rd"];
// Write a JavaScript program to display in the following way :
// 1st choice is Karachi
// 2nd choice is Lahore
// 3rd choice is Islamabad

var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var o = ["th","st","nd","rd"];


for(var i=0; i<aCities.length; i++ ){
    var o=[i=1];

    i++;
    document.write(i);


}