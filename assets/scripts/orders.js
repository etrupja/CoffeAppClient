class Order{
    constructor(_id, _fullName, _email, _description){

        if(arguments.length != 4)
        {
            throw new Error("Please, provide 4 properties")
        }

        this.id = _id;
        this.fullName = _fullName;
        this.email = _email;
        this.description = _description;
    }
}

// const orders = [
//     new Order(1, 'Flori Lastname','flori@epoka.edu.al','Flori order description'),
//     new Order(2, 'Emer Mbiemer', 'emer@epoka.edu.al','Emer order description')
// ];

const orders = JSON.parse(localStorage.getItem('orders')) || [];

console.log('orders (orders.js) = ', orders);

//Get Table -> <tbody>
const ordersTableBody = $("#ordersTbl tbody");
ordersTableBody.empty();

function populateTable(){
    $.each(orders, function(index, order){
        const newRowHtml = `<tr>
            <td>${order.fullName}</td>
            <td>${order.email}</td>
            <td onclick="getDescriptionLanguage('${order.description}')">${order.description}</td>
            <td>
                <button id="editBtn" data-order-id="${order.id}">Edit</button>
                <button id="removeBtn" data-order-id="${order.id}">Remove</button>
            </td>
        </tr>`;

        ordersTableBody.append(newRowHtml);
    });
}

populateTable();

$(ordersTableBody).on('click', "#editBtn", function(){
    const orderId = $(this).data('order-id');
    const order = orders.find(n => n.id === orderId);
    // editOrder(order);

    console.log($`Selected order = ${order}`);

    localStorage.setItem('orderToUpdateId', orderId);

    $("#fullName").val(order.fullName);
    $("#email").val(order.email);
    $("#description").val(order.description);

    $("#editModal").show();
})


$(ordersTableBody).on('click', "#removeBtn", function(){
    const orderId = $(this).data('order-id');
    const order = orders.find(n => n.id === orderId);
    // editOrder(order);

    console.log($`Selected order = ${order}`);

    localStorage.setItem('orderToRemoveId', orderId);

    $("#remove-fullname").text(order.fullName);

    $("#removeModal").show();
})

$("#closeEditModalSpn").click(function(){
    $("#editModal").hide();
});

$("#cancelRemoveBtn").click(function(){
    $("#removeModal").hide();
});

$("#confirmBtn").click(function(){
    console.log('orders before remove = ', orders);

    // Get the ID of the order to remove
    const orderToRemoveId = JSON.parse(localStorage.getItem('orderToRemoveId'));

    // Find the index of the order with that ID
    const index = orders.findIndex(order => order.id === orderToRemoveId);

    if (index !== -1) {
        // Remove the order from the array
        orders.splice(index, 1);

        // Update the orders in localStorage
        localStorage.setItem('orders', JSON.stringify(orders));

        // Optionally, refresh the page to reflect changes
        // location.reload();
    } else {
        console.log('Order not found');
    }

    $("#removeModal").hide();

    // Refresh the browser
    localStorage.setItem('orderToRemoveId', '')
    location.reload();
});

$("#updateBtn").click(function(){
    // Get the ID of the order to update
    const orderToUpdateId = JSON.parse(localStorage.getItem('orderToUpdateId'));

    // Find the index of the order with that ID
    const index = orders.findIndex(order => order.id === orderToUpdateId);

    if (index !== -1) {
        // Update the order in the array
        orders[index].fullName = $("#fullName").val();
        orders[index].email = $("#email").val();
        orders[index].description = $("#description").val();

        // Update the orders in localStorage
        localStorage.setItem('orders', JSON.stringify(orders));

        // Optionally, refresh the page to reflect changes
        // location.reload();
    } else {
        console.log('Order not found');
    }

    $("#editModal").hide();

    // Refresh the browser
    localStorage.setItem('orderToUpdateId', '')
    location.reload();
});


function getDescriptionLanguage(textToBeChecked){
    console.log(textToBeChecked);
    $.ajax({
        async: true,
        crossDomain: true,
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect',
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': '4899b5a1f2msh3594b57d4f697f7p185222jsne688960537df',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        data: {
            q: textToBeChecked
        },
        success: function (response) {
            console.log(response);
        alert(`Language detected: ${response.data.detections[0][0].language}`)

        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
        }
    });
    
    // $.ajax(settings).done(function (response) {
    //     console.log(response);
    // });
}

