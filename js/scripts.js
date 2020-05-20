var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];



var calculate = function(){
    var century = parseInt(document.getElementById("century").value);
    var year = parseInt(document.getElementById("year").value);
    var month = parseInt(document.getElementById("month").value);
    var date =  parseInt(document.getElementById("date").value);
    var dayOfTheWeek = ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date ) % 7;

    
    return(Math.floor(dayOfTheWeek));
}


var checkgender = function() {

    var gdr = document.getElementsByName("kevz"); 
    if(gdr[0].checked === true){
        gender = "male";
    }else if(gdr[1].checked === true ){
        gender = "female";      
    }                         
    else {
        alert("Input gender:");
    }}
var result = function(){
    var dayOfTheWeek = calculate();
    var gender = checkgender();
   
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
    
        break;
    }
    }
    