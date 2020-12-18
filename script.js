// Grabs the moment object
var now = moment();

// Grabs the current hour from the moment object
var currentHour = now.format("HH");

// Grabs an array of the hour blocks 
var hourValues = $(".hour")

//Current date will be displayed at the top of the page
$("#currentDay").text(now.format("dddd, MMMM Do YYYY"));

//For each hour block, check its time data attribute against the current hour
for (i = 0; i < hourValues.length; i++) {

    // If the current hour is less than the time data attribute, the block gets the "future" class
    if (currentHour < $(hourValues[i]).attr("data-time")) {
        $(hourValues[i]).next().addClass("future");
    }
    // If the current hour is equal to the time data attribute, the block gets the "present" class
    else if (currentHour === $(hourValues[i]).attr("data-time")) {
        $(hourValues[i]).next().addClass("present");
    }
    // Otherwise, the block gets the "past" class
    else {
        $(hourValues[i]).next().addClass("past");
    }
}

//When user clicks the "save" button, their input will be saved in local storage
$(".saveBtn").click(function(event) {
    localStorage.setItem("task", $(this).prev().val());

    // The user's input will be saved to that text area for later use
    var saveText = $(this).prev();
    saveText.text(localStorage.getItem("task"));
})














