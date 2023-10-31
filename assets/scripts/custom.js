// ---- START - ALL PAGES ----
// setTimeout(() => {
//     document.getElementById("currentYear").innerHTML = new Date().getFullYear();
// }, 5000)

setInterval(() => {
    document.getElementById("currentYear").innerHTML = new Date().toLocaleTimeString();
}, 1000)


// ---- END - ALL PAGES ----

// START - ORDER PAGE
function validateAndSubmit(event){
    event.preventDefault();

    var isValidated = true;

    // console.log('isValidated [initial] = ', isValidated);

    //Reset all errors
    document.getElementById("fullNameSpn").innerHTML = "";
    document.getElementById("emailSpn").innerHTML = "";
    document.getElementById("descriptionSpn").innerHTML = "";

    const fullName = document.getElementById("fullName").value;
    if(fullName.length < 3){
        document.getElementById("fullNameSpn").innerHTML = "Full name must be min 3 chars";
        isValidated = false;
    }

    const email = document.getElementById("email").value;

    //Validate if is an email address
    //Validate if it is a valid Epoka email address
    // console.log('email = ', email);
    // console.log('email.endsWith("@epoka.edu.al") = ', email.endsWith("@epoka.edu.al"));

    if(email.endsWith("@epoka.edu.al")){
    } else {
        document.getElementById("emailSpn").innerHTML = "This is not a valid Epoka email"
        isValidated = false;
    }

    const description = document.getElementById("description").value;
    if(description.length < 16){
        document.getElementById("descriptionSpn").innerHTML = "Description must be min 16 chars";
        isValidated = false;
    }
    //Validate input values

    // console.log('isValidated [final] = ', isValidated);
    // console.log('isValidated condition = ', isValidated == false);


    if(isValidated == false)
    {
        return
    }

    //Call method
    handleSubmit(fullName, email, description);

}

function handleSubmit(_fullName, _email, _description){
    // console.log('Full name: ', fullName);
    // console.log('Email: ', email);
    // console.log('Description: ', description);

    // Create Object
    var newOrder = {
        fullName: _fullName,
        email: _email,
        description: _description
    }

    console.log('newOrder Object = ', newOrder);

    // var newOrderNested = {
    //     fullName: _fullName,
    //     email: _email,
    //     description: _description,
    //     user: {
    //         firstName: 'Epoka'
    //     }
    // }

    // console.log('newOrder Object (Nested) = ', newOrderNested);



    //Call API Endpoint

    try{
        //Call API
        console.log("Calling api...");
        throw new Exception()
    } catch {
        //API call fails
        console.log('API call failed...')
    } finally{
        console.log('Finally.....')
    }


}
// END - ORDER PAGE


//START - ADD EVENT LISTENER

document.addEventListener('DOMContentLoaded', (event) => {
    const orderNowBtn = document.getElementById("submitBtn")
    if(orderNowBtn){
        orderNowBtn.addEventListener("click", validateAndSubmit)
    }
})

//END - ADD EVENT LISTENER


