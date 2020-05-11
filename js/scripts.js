// first I will list all the variables I will require for the functionality of the Akan Webpage
var century;
var year;
var month;
var date;
var dayOfTheWeek;
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]


var day = function(){
    century = parseInt(document.getElementById("century").value);
    year = parseInt(document.getElementById("year").value);
    month = parseInt(document.getElementById("month").value);
    date = parseInt(document.getElementById("date").value);
}
//here we assigned a variable day that will convert user input into integers so we can calculate values 