var userInput = document.querySelector(".form-control")

//Current date will be displayed at the top 
$("#currentDay").text(moment().toDate());


//When user clicks the "save" button, their input will be saved in local storage
var buttonTest = $(".saveBtn").click(function() {
    console.log(userInput.value);
    localStorage.setItem("activities", userInput.value);
})


