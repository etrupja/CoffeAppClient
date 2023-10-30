localStorage.setItem("customJS-currentYearLocalStorage", new Date().toLocaleTimeString());
sessionStorage.setItem("customJS-currentYearLocalStorage", new Date().toLocaleTimeString());
// ---- START - ALL PAGES ----
// document.getElementById("currentYear").innerHTML = new Date().getFullYear();

// setInterval(() => {
//     document.getElementById("currentYear").innerHTML = new Date().toLocaleTimeString();
//     console.log('Current time: ', new Date().toLocaleTimeString());
// }, 2000);

setTimeout(() => {
    document.getElementById("currentYear").innerHTML = new Date().toLocaleTimeString();
}, 5000)

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
        return;
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


//     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/i;
// const email = "Example@Email.Com";

// if (emailPattern.test(email)) {
//   console.log("Valid email.");
// } else {
//   console.log("Invalid email.");
// }

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

    //Create an object
    var person = {
        fullName: fullName,
        email: email,
        description: description
    };

    try{

        throw new Error('This is an error');

    } catch(error){
        console.log('Error: ', error);
    } finally{
        console.log('Finally');
    }


}
// END - ORDER PAGE


// Using addEventListener instead of inline onclick
document.addEventListener('DOMContentLoaded', (event) => {
    const submitBtn = document.getElementById("submitBtn");
    if(submitBtn) {  // Check if submitBtn is not null
        submitBtn.addEventListener("click", validateAndSubmit);
    }
});

// END - ORDER PAGE


