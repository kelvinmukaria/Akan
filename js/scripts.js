// first I will list all the variables I will require for the functionality of the Akan Webpage
var century;
var year;
var month;
var date;
var dayOfTheWeek;
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
//my variable names correspond to the ids I assigned in the form

var day = function(){
    century = parseInt(document.getElementById("century").value);
    year = parseInt(document.getElementById("year").value);
    month = parseInt(document.getElementById("month").value);
    date = parseInt(document.getElementById("date").value);
}
//here we assigned a variable day that will convert user input into integers so we can calculate values 

//now we write a function to find the day of the week,the calculation shall be according to the predefined formula given in the project outline

var calculate = function(){
    day(); 
    dayOfTheWeek = ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date ) % 7;
    return(Math.floor(dayOfTheWeek));
    console.log(dayOfTheWeek);

}