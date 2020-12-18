var now = moment();
var currentHour = now.format("HH");
var hourValues = $(".hour")

console.log(hourValues)

// hourValues.each( function(index) {
//     console.log($(hourValues[index]).attr("data-time"));
// });

for(i=0; i < hourValues.length; i++){
    // console.log($(hourValues[i]).attr("data-time"));

    if(currentHour < $(hourValues[i]).attr("data-time")){
        console.log("before")
    }
    else if(currentHour===$(hourValues[i]).attr("data-time")){
        console.log("during")
    }
    else{
        console.log("after")
    }
}


//Current date will be displayed at the top 
$("#currentDay").text(now.format("dddd, MMMM Do YYYY"));


//When user clicks the "save" button, their input will be saved in local storage
$(".saveBtn").click(function() {
    localStorage.setItem("task", $(this).prev().val());
    $(this).prev().val((localStorage.getItem("task")));
})












