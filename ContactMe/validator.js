function validate() {
    var errorMessages=[];
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
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
    if( FirstName == "" || FirstName.length > 20 ) {
       errorMessages.push("Please provide your first name.");
    }
    if( LastName == "" ) {
        errorMessages.push("Please provide your last name." );
    }
    if( EMail == ""){
       errorMessages.push("Please provide your email." );
    }
    if( Phone == "" 
        || isNaN(document.getElementById("Phone").value ) 
        || phone.length >15 
        || document.getElementById("Phone").value.length != 10 ) {
        
            errorMessages.push("Please provide a valid phone number." );
    }
    if( City == "" ) {
        errorMessages.push("Please provide a city!" );
    }
    if( State == "" ) {
        errorMessages.push("Please select a state." );
     }
     if( ZipCode == "" || isNaN(ZipCode ) ||
     ZipCode.length != 5 ) {
     errorMessages.push("Please provide a valid 5 digit zipcode." );
    }
    if( Country == "" ) {
       errorMessages.push("Please select a country." );
    }
    if( Username == "") {
        errorMessages.push("Please provide a valid username.");
     }
     if( Password == "") {
        errorMessages.push("Please provide a valid password.");
     }

    if(errorMessages.length > 0 ){
        var errorMessageHTML = "";
        var ErrorHeader = "<h2>Error Submitting!</h2><h3>See Below:</h3>";
        for (var i=0; i<errorMessages.length; i++){
            errorMessageHTML += "<p>" + errorMessages[i] +  "</p>";
        }
        document.getElementById("ErrorsHeader").innerHTML = ErrorHeader;
        document.getElementById("errorMessages").innerHTML = errorMessageHTML;
        return false;
    }
    return true;
 }