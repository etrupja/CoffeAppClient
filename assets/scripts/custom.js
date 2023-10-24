// ---- START - ALL PAGES ----
document.getElementById("currentYear").innerHTML = new Date().getFullYear();
// ---- END - ALL PAGES ----

// START - ORDER PAGE
function validateAndSubmit(event){
    event.preventDefault();
    document.getElementById("fullNameSpn").innerHTML = "";
    document.getElementById("emailSpn").innerHTML = "";
    document.getElementById("descriptionSpn").innerHTML = "";

    //Reset all errors
    
    const fullName = document.getElementById("fullName").value;
    if(fullName.length < 3){
        document.getElementById("fullNameSpn").innerHTML = "Full name must be min 3 chars";
    }

    const email = document.getElementById("email").value;

    //Validate if is an email address
    //Validate if it is a valid Epoka email address
    console.log('email = ', email);
    console.log('email.endsWith("@epoka.edu.al") = ', email.endsWith("@epoka.edu.al"));

    if(email.endsWith("@epoka.edu.al")){
    } else {
        document.getElementById("emailSpn").innerHTML = "This is not a valid Epoka email"
    }

    const description = document.getElementById("description").value;
    if(description.length < 16){
        document.getElementById("descriptionSpn").innerHTML = "Description must be min 16 chars";
    }
    //Validate input values

    //Call method
    handleSubmit(fullName, email, description);

}

function handleSubmit(fullName, email, description){
    console.log('Full name: ', fullName);
    console.log('Email: ', email);
    console.log('Description: ', description);

    //Call API Endpoint

}
// END - ORDER PAGE


