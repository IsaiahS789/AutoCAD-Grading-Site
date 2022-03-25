window.addEventListener("DOMContentLoaded", domLoaded);
function domLoaded () {

    document.querySelector(".custom-submit-button").addEventListener("click", submitEventHandler);
}

submitEventHandler = () => {
    const input = document.getElementById(".formInput");
    if (input === '') {
        window.alert("No assignment has been selected. Please select an assignment to grade against.");
    } else {
        location.href = "uploadPage.html";
    }
}