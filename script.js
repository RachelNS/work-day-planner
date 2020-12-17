var userInput = document.querySelector(".form-control")
var hour = $("#experiment");
var now = moment();

//Current date will be displayed at the top 
$("#currentDay").text(now.format("dddd, MMMM Do YYYY"));


//When user clicks the "save" button, their input will be saved in local storage
var buttonTest = $(".saveBtn").click(function() {
    console.log(userInput.value);
    localStorage.setItem("activities", userInput.value);
    $(".form-control").value(localStorage.getItem("activities"));
})


console.log(moment.parseZone());

if(now.isAfter("2021-11-18", "hour")) {
    $(".hour").addClass("future")
}

else{
    $(".hour").addClass("past")
}

console.log(now.hour());

console.log(hour.text);
