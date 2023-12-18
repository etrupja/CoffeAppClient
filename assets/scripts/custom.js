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

// function handleSubmit(_fullName, _email, _description){
//     // Create Object
//     var newOrder = {
//         id: Math.floor(Math.random()*1000),
//         fullName: _fullName,
//         email: _email,
//         description: _description
//     }

//     console.log('newOrder Object = ', newOrder);

//     //Retreive items from localstorage
//     var existingOrders = JSON.parse(localStorage.getItem('orders')) || [];

//     //Add order to existingOrders array
//     existingOrders.push(newOrder);

//     //Update localstorage with new items
//     localStorage.setItem('orders', JSON.stringify(existingOrders));

//     alert('Order added to localstorage');
// }


function handleSubmit(_fullName, _email, _description){
    // Create Object
    var newOrder = {
        fullName: _fullName,
        email: _email,
        description: _description
    }

    console.log('newOrder Object = ', newOrder);

    // Define settings for AJAX call
    const settings = {
        async: true,
        crossDomain: true,
        url: 'http://127.0.0.1:80/coffeshopapi/api.php',
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        data: JSON.stringify(newOrder) // Convert the newOrder object to a JSON string
    };

    // Make the AJAX call
    $.ajax(settings).done(function (response) {
        console.log('Response from API:', response);
        alert('Order added successfully');
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.error('Error: ' + textStatus, errorThrown);
        alert('Failed to add order');
    });
}


$(document).ready(function(){
    $("#submitBtn").click(validateAndSubmit)
})

//END - ADD EVENT LISTENER


