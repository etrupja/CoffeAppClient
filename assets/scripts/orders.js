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

var orders = JSON.parse(localStorage.getItem('orders')) || [];

console.log('orders (before parse) = ', localStorage.getItem('orders'));
console.log('orders (after parse) = ', orders);

//Get Table -> <tbody>
const ordersTableBody = $("#ordersTbl tbody");
ordersTableBody.empty();

function populateTable(){
    $.each(orders, function(index, order){

        console.log(`Index = ${index}. Order = ${order}`);

        const newRowHtml = `<tr>
            <td>${order.fullName}</td>
            <td>${order.email}</td>
            <td onclick="detectTextLanguage('${order.description}')">${order.description}</td>
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

    localStorage.setItem('itemToBeEditedId', orderId);

    $("#fullName").val(order.fullName);
    $("#email").val(order.email);
    $("#description").val(order.description);

    $("#editModal").show();
})


$(ordersTableBody).on('click', "#removeBtn", function(){
    const orderId = $(this).data('order-id');
    const order = orders.find(n => n.id === orderId);
    // editOrder(order);

    localStorage.setItem('itemToBeRemovedId', orderId);


    console.log($`Selected order = ${order}`);

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

    //1. Get order id of the item to be removed
    var orderId = localStorage.getItem('itemToBeRemovedId');

    console.log('orderId from localstorage = ', orderId);

    //2. Get from localstorage or use order from above (orders)
    const index = orders.findIndex(order => order.id == orderId);

    console.log('all orders = ', orders);
    console.log('index == ', index);


    if(index !== -1){
        orders.splice(index,1);

        localStorage.setItem('orders', JSON.stringify(orders))
    } else {
        console.log('Order no found')
    }
 
    $("#removeModal").hide();
    location.reload();

})

function detectTextLanguage(textToBeDetected){

    console.log('textToBeDetected = ', textToBeDetected);

    const settings = {
        async: true,
        crossDomain: true,
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect',
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': 'd67a5eab10msh444b6ea21047b91p12c928jsn78f03f342a27',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        data: {
            q: textToBeDetected
        }
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);

        alert(response.data.detections[0][0].language)

    });
}
