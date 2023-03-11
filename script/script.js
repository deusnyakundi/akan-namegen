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