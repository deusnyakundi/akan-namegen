function getAkanName () {
    let yearOfBirth = document.getElementById("year").value;
    let monthOfBirth = Number(document.getElementById("month").value);
    let dayOfBirth = Number(document.getElementById("day").value);
    let genders = document.getElementsByName("gender");
  
    // function to get gender
    function getGender () {
      for (let gender of genders){
        if (gender.checked){
          return gender.value;
        }
      }
    }
    let myGenderValue = getGender();
    console.log(myGenderValue);

}
