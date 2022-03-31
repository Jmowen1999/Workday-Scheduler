$(document).ready(function () {
    
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
    
    $(".saveBtn").on("click", function () {

        console.log(this);
        var text = $(this).siblings(".description").val(); 
        var time = $(this).parent().attr("id"); 

        localStorage.setItem(time, text);
    })
    // loads saved data for each our from loacl storage
    $("#hour8 .description").text(localStorage.getItem("hour8"));
    $("#hour9 .description").text(localStorage.getItem("hour9"));
    $("#hour10 .description").text(localStorage.getItem("hour10"));
    $("#hour11 .description").text(localStorage.getItem("hour11"));
    $("#hour12 .description").text(localStorage.getItem("hour12"));
    $("#hour13 .description").text(localStorage.getItem("hour13"));
    $("#hour14 .description").text(localStorage.getItem("hour14"));
    $("#hour15 .description").text(localStorage.getItem("hour15"));
    $("#hour16 .description").text(localStorage.getItem("hour16"));
    $("#hour17 .description").text(localStorage.getItem("hour17"));

    function hourTracker() {
        var currentHour = moment().hour();

        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log( blockHour, currentHour)

            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    hourTracker();
})