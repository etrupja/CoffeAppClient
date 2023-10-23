// ---------- START: HOME PAGE ----------
document.getElementById('currentYear').innerHTML = new Date().getFullYear() + 1;
// ---------- END: HOME PAGE ----------

// ---------- START: ORDER FORM ----------
// The function to collect form values and call another function
function validateAndSubmit(event) {

    //Add this after the error
    event.preventDefault();

    // Gather the input values
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const description = document.getElementById("description").value;
  
    // Call the function with the input values as parameters
    handleSubmit(fullName, email, description);
  }
  
  // The function that gets called with form values
  function handleSubmit(fullName, email, description) {
    // Do something with the input values
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Description:", description);
  
    // You can add more logic here
  }
  // ---------- END: ORDER FORM ----------

  // ---------- START: ORDERS LIST ----------
  // Sample data array, you can replace this with actual data


  
  
  
  // ---------- END: ORDERS LIST ----------