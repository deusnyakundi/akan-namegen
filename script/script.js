//Add Javascript here 

//Functions to validate data
function validateDay(){
    let day = parseInt(document.getElementById('day').value)
    let dayError;

    if(isNaN(day) || day<=0 || day>31){
        dayError = "Day can only be from 1 to 31"
        document.getElementById('day-error').innerHTML = dayError
        return dayError
    }
};

function validateMonth(){
    let month = parseInt(document.getElementById('month').value)
    let monthError;

    if(isNaN(month) || month<=0 || month>12){
        monthError = "There are only 12 months in a year."
        document.getElementById('month-error').innerHTML = monthError
    }
};

function validateYear(){
    let year = document.getElementById('year').value
    let yearError
    
    if(year.length > 4 || isNaN(year)){
        yearError = "Invalid input."
        document.getElementById('year-error').innerHTML = yearError
    }
};


//Function to get the day of the week from dates
function dayOfTheWeek(){
    validateDay()
    validateMonth()
    validateYear()
    var DD = document.getElementById('day').value
    var MM = document.getElementById('month').value - 1
    var year = document.getElementById('year').value

    var dateOfBirth = new Date(year, MM, DD)
    let day = dateOfBirth.getDay()
    console.log(day)
    return day;
}
