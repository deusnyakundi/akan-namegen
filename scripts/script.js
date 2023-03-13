
    // validation functions
    function dayValidator () {
        let day = parseInt(document.getElementById('day').value)
    let dayError;

    if(isNaN(day) || day<=0 || day>31){
       
        dayError = "Day can only be from 1 to 31"
        document.getElementById('day-error').innerHTML = dayError
        document.getElementById('searchbtn').setAttribute('disabled','disabled')
        
        return dayError
        
    }
    
    }

    


    function monthValidator () {
        let month = parseInt(document.getElementById('month').value)
    let monthError;

    if(isNaN(month) || month<=0 || month>12){
        monthError = "There are only 12 months in a year."
        document.getElementById('month-error').innerHTML = monthError
        document.getElementById('searchbtn').setAttribute('disabled','disabled')
    }
    }

    function yearValidator(){
            let year = document.getElementById('year').value
            let yearError
        
        if(year.length > 4 || isNaN(year)){
            yearError = "Invalid input."
            document.getElementById('year-error').innerHTML = yearError
            document.getElementById('searchbtn').setAttribute('disabled','disabled')
        }
    };

    //Function to get the day of the week from dates
    function dayOfTheWeek(){
        dayValidator()
        monthValidator()
        yearValidator()
        var DD = document.getElementById('day').value
        var MM = document.getElementById('month').value - 1
        var YYYY = document.getElementById('year').value

        var dateOfBirth = new Date(YYYY, MM, DD)
        let day = dateOfBirth.getDay()
        console.log(day)
        return day;
    }

function userGender(){
    let male = document.getElementById('male').checked
    let female = document.getElementById('female').checked
    let genderError
    if( male === true){
        var gender = "male"
        return gender;
    }else if(female === true){
        var gender = "female"
        return gender;
    }else{
        genderError="Please select a gender"
        document.getElementById('gender-error').innerHTML = genderError
    }
}


//Function to retrieve the Akan name
function akanName(){

    
    //Hide form when the Akan name is displayed
    var hideForm = document.getElementById('akan-form')
    if (hideForm.style.display === "none") {
        hideForm.style.display = "block";
      } else {
        hideForm.style.display = "none";
      }

    let sharedGender = userGender();
    let weekDay = dayOfTheWeek()
 



  //Array with days of the week
  let daysOfWeek = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];

   //Array with Akan names for men
  let maleAkanNames = [
    "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
  ];

   //Array with Akan names for women
  let femaleAkanNames = [
    "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
  ];

   
    if(sharedGender==='male'){
        var userName = maleAkanNames[weekDay]
        var birthDay = daysOfWeek[weekDay]
        response = `Your were born on a ${birthDay} and your Akan name is ${userName}!!`
        document.getElementById('display-name').innerHTML = response
    }else if(sharedGender==='female'){
        var userName = femaleAkanNames[weekDay]
        var birthDay = daysOfWeek[weekDay]
        response = `Your were born on a ${birthDay} and your Akan name is ${userName}!!`
        document.getElementById('display-name').innerHTML = response
    }else{
        alert("The form is missing some data!")
        hideForm.style.display = "block";
    }
    console.log(sharedGender, weekDay)

}