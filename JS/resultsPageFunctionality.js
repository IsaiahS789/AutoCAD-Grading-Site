window.addEventListener("DOMContentLoaded", domLoaded);
function domLoaded () {
    // Select the student image div to display the student's drawing
    // LabView should be made to take care of this- no idea how it works
    studentSubmission = document.getElementById('studentImage');

    // Commented out because we aren't allowed to access images from local storage due to security measures.
    studentSubmission.src = localStorage.getItem("tempStorage");

    // Setting the due date on the results page to be the current date and time.
    var today = new Date();
    var dateString = today.getDay() + "/" + today.getMonth() + "/" + today.getFullYear() + " at " + today.getHours() + ":" + today.getMinutes();

    console.log(dateString);

    // Adjusting end of the date string to be either AM or PM
    if (today.getHours >= 12) {
        dateString += " PM"
    } else {
        dateString += " AM"
    }

    document.getElementById('dueDate').innerHTML = "Due date: " + dateString;
}