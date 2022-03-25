window.addEventListener("DOMContentLoaded", domLoaded);
function domLoaded () {

    document.querySelector(".custom-submit-button").addEventListener("click", submitEventHandler);
}

submitEventHandler = () => {
    const input = document.querySelector(".custom-file-input").value;
    if (input === '') {
        window.alert("No file has been selected. Please select a file to grade.");
    } else {
        if (String(input).endsWith(".dxf") || String(input).endsWith(".jpg") || String(input).endsWith(".png")) {
            // For testing purposes, we will allow .png and .jpg files to be uploaded
            localStorage.setItem("tempStorage",input);
            location.href = "resultsPage.html";

        } else {
            window.alert("Invalid file format! Please upload a .dxf file.");
        }
    }
}