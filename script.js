var now = moment();
var time = $(".day-increment").attr("data-time");

//Current date will be displayed at the top 
$("#currentDay").text(now.format("dddd, MMMM Do YYYY"));


//When user clicks the "save" button, their input will be saved in local storage
$(".saveBtn").click(function() {
    localStorage.setItem("activities", $(".form-control").val())
})

// The next time the page loads, the user's input will remain 
$(".form-control").val(localStorage.getItem("activities"));








