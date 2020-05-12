// first I will list all the variables I will require for the functionality of the Akan Webpage
var century = document.getElementById("century").value;
var year = document.getElementById("year").value;
var month = document.getElementById("month").value;
var date = document.getElementById("date").value;
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
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
//the expected value should be in a range of 0-6

var checkgender = function() {
    calculate();
    var gdr = document.getElementsByName("kevz"); 
    if(gdr[0].checked === true){
        gender = "male";
    }else if(gdr[1].checked === true ){
        gender = "female";
    }                         
    else {
        alert("Input gender:");
    }
var result = function(){
    dayOfTheWeek = calculate();
    checkgender();
    }
    //var result() is for form validation,allows user input to be processed after the conditions are met
// for the if/else statement and since it's long,I'll use a switch statement to execute the code depending on different cases
  switch(gender){
        case "male":
        if(dayOfTheWeek === 0){
            document.getElementById("result").innerHTML = "Monday" + maleNames[0];
        }else if (day === 1){
            document.getElementById("result").innerHTML = "Tuesday" + maleNames[1];
        }else if (day === 2){ 
            document.getElementById("result").innerHTML = "Wednesay" + maleNames[2];
        }else if (day === 3){ 
            document.getElementById("result").innerHTML = "Thursday" + maleNames[3];
        }else if (day === 4){ 
            document.getElementById("result").innerHTML = "Friday" + maleNames[4];
        }else if (day === 5){ 
            document.getElementById("result").innerHTML = "Saturday" + maleNames[5];
        }else { 
            document.getElementById("result").innerHTML = "Sunday" + maleNames[6];
    }
    //this block fetches the element in the index.html and passes it through the if/else statement for malenames
    break;
    case "female":
        if(dayOfTheWeek === 0){
            document.getElementById("result").innerHTML = "Monday" + femaleNames[0];
        }else if (day === 1){
            document.getElementById("result").innerHTML = "Tuesday" + femaleNames[1];
        }else if (day === 2){ 
            document.getElementById("result").innerHTML = "Wednesay" + femaleNames[2];
        }else if (day === 3){ 
            document.getElementById("result").innerHTML = "Thursday" + femaleNames[3];
        }else if (day === 4){ 
            document.getElementById("result").innerHTML = "Friday" + femaleNames[4];
        }else if (day === 5){ 
            document.getElementById("result").innerHTML = "Saturday" + femaleNames[5];
        }else{ 
            document.getElementById("result").innerHTML = "Sunday" + femaleNames[6];
        }
        //for femaleNames variable assigned at beginning of script
        break;
    }
    }
    

    //break to stop exexuting code if condition is mety 