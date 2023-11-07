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

const orders = [
    new Order(1, 'Flori Lastname','flori@epoka.edu.al','Flori order description'),
    new Order(2, 'Emer Mbiemer', 'emer@epoka.edu.al','Emer order description')
];

//Get Table -> <tbody>
const ordersTableBody = $("#ordersTbl tbody");
ordersTableBody.empty();

function populateTable(){
    $.each(orders, function(index, order){

        console.log(`Index = ${index}. Order = ${order}`);

        const newRowHtml = `<tr>
            <td>${order.fullName}</td>
            <td>${order.email}</td>
            <td>${order.description}</td>
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

    $("#remove-fullname").text(order.fullName);

    $("#removeModal").show();
})

$("#closeEditModalSpn").click(function(){
    $("#editModal").hide();
});

$("#cancelRemoveBtn").click(function(){
    $("#removeModal").hide();
});

