function validate() {
    var errorMessages = [];
    var FirstName = document.getElementById("FirstName").value;
    var LastName = document.getElementById("LastName").value;
    var EMail = document.getElementById("EMail").value;
    var Phone = document.getElementById("Phone").value;
    var ZipCode = document.getElementById("ZipCode").value;
    var State = document.getElementById("State").value;
    var City = document.getElementById("City").value
    var Country = document.getElementById("Country").value;
    var Username = document.getElementById("Username").value;
    var Password = document.getElementById("Password").value;

    // https://stackoverflow.com/a/46181
    const EmailRE = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // https://stackoverflow.com/a/6067606
    const LettersRE = /^[A-Za-z]+$/;

    // https://www.w3resource.com/javascript/form/password-validation.php
    const PassRE = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,7}$/;

    if (FirstName === "" || !LettersRE.test(FirstName) || FirstName.length > 20 || FirstName === null) {
        errorMessages.push("Invalid First Name");
    }
    if (LastName === "" || !LettersRE.test(LastName) || LastName.length > 50 || LastName === null) {
        errorMessages.push("Invalid Last Name");
    }
    if (!EmailRE.test(EMail)) {
        errorMessages.push("Invalid Email Address");
    }
    if (Phone === "" ||
        isNaN(Phone) ||
        Phone.length > 15 ||
        Phone === null) {

        errorMessages.push("Invalid Phone Number");
    }
    if (City === "") {
        errorMessages.push("Invalid City");
    }
    if (State === "") {
        errorMessages.push("Please select a state.");
    }
    if (Country === "USA" && (ZipCode === "" || isNaN(ZipCode) ||
            ZipCode.length != 5)) {
        errorMessages.push("Invalid Zipcode");
    }
    if (Country === "") {
        errorMessages.push("Please select a country.");
    }
    if (Username === "" || Username === null || Username > 12) {
        errorMessages.push("Invalid Username");
    }
    if (!PassRE.test(Password)) {
        errorMessages.push("Password must be under 7 characters and contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character.");
    }

    if (errorMessages.length > 0) {
        var errorMessageHTML = "";
        var ErrorHeader = "<h2>Error Submitting!</h2><h3>See Below:</h3>";
        for (var i = 0; i < errorMessages.length; i++) {
            errorMessageHTML += "<p>" + errorMessages[i] + "</p>";
        }
        document.getElementById("ErrorsHeader").innerHTML = ErrorHeader;
        document.getElementById("errorMessages").innerHTML = errorMessageHTML;
        return false;
    }
    return true;
}