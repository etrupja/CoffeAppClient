// ---- START - ALL PAGES ----

setInterval(() => {
    $("#currentYear").html(new Date().toLocaleTimeString());
}, 1000)

// ---- END - ALL PAGES ----

// START - ORDER PAGE
function validateAndSubmit(event){
    event.preventDefault();

    var isValidated = true;

    // console.log('isValidated [initial] = ', isValidated);

    //Reset all errors
    $("#fullNameSpn").html("");
    $("#emailSpn").html("");
    $("#descriptionSpn").html("");

    const fullName = $("#fullName").val();
    if(fullName.length < 3){
        $("#fullNameSpn").html("Full name must be min 3 chars");
        isValidated = false;
    }

    const email = $("#email").val();
    if(email.endsWith("@epoka.edu.al")){
    } else {
        $("#emailSpn").html("This is not a valid Epoka email");
        isValidated = false;
    }

    const description = $("#description").val();
    if(description.length < 16){
        $("#descriptionSpn").html("Description must be min 16 chars");
        isValidated = false;
    }
    //Validate input values

    if(isValidated == false)
    {
        return
    }

    //Call method
    handleSubmit(fullName, email, description);

}

function handleSubmit(_fullName, _email, _description){
    // Create Object
    var newOrder = {
        id: Math.floor(Math.random() * 1000000), // Random number between 0 and 1000000
        fullName: _fullName,
        email: _email,
        description: _description
    }

    console.log('newOrder Object = ', newOrder);

    // Retrieve existing orders from localStorage, or initialize an empty array if none exist
    var existingOrders = JSON.parse(localStorage.getItem('orders')) || [];

    // Add the new order to the array
    existingOrders.push(newOrder);

    // Update localStorage with the new array
    localStorage.setItem('orders', JSON.stringify(existingOrders));

    console.log('New order added:', newOrder);
    console.log('Updated orders:', existingOrders);
}

$(document).ready(function(){
    $("#submitBtn").click(validateAndSubmit)
})

//END - ADD EVENT LISTENER


