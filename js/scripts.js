function getAkanNames(){
    var maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
    var dayCalculator = getDay();
    var gender = getGender();
    if(days[dayCalculator] && gender == "female"){
        alert("Your day of birth is " + days[dayCalculator] + " with an Akan name of " + femaleAkanNames[dayCalculator]);
    }else if(days[dayCalculator] && gender == "male"){
        alert("Your day of birth is " + days[dayCalculator] + " with an Akan name of " + maleAkanNames[dayCalculator]);
    }else{
        alert("Please check your details!");
    }
}                        
    
  function getDay(){
    var dayOfBirth = document.getElementById("date").value;
    var DD = parseInt(dayOfBirth);
    var monthOfBirth = document.getElementById("month").value;
    var MM = parseInt(monthOfBirth);
    var yearOfBirth = document.getElementById("year").value;
    var YY = parseInt(yearOfBirth);
    var date = new Date (YY + "/" + MM + "/" + DD);
    var dayCalculator = date.getDay();
    return dayCalculator
}
function getGender(){
    if(document.getElementById("gender").checked){
       var gender = "male";
    }else{
    var gender = "female";
    }
return gender;
}

