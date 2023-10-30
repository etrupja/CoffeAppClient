class Order {
    constructor(fullName, email, description) {
        if (arguments.length !== 3) {
            throw new Error("Constructor requires exactly 3 arguments");
        }

        if(typeof fullName !== 'string'){
            throw new Error("fullName must be a string");
        }
        
        this.fullName = fullName;
        this.email = email;
        this.description = description;
    }
}


const orders = [
    new Order('Flori Lastname', 'flori@epoka.edu.al','Flori order description'),
    new Order('Emer Mbiemer', 'emer@epoka.edu.al','Emer order description oooo')
];

// const fullNames = orders.map(order => order.fullName);
// console.log(fullNames);  // Output: ['Flori Lastname', 'Emer Mbiemer']

// const filteredOrders = orders.filter(order => order.email.endsWith("@epoka.edu.al"));
// console.log(filteredOrders);
// // Output: The entire orders array since all emails end with @epoka.edu.al

// const totalCharactersInFullNames = orders.reduce((acc, order) => acc + order.fullName.length, 0);
// console.log(totalCharactersInFullNames);  // Output: 25 ('Flori Lastname'.length + 'Emer Mbiemer'.length)



//Get Table -> <tbody>
const ordersTableBody = document.getElementById("ordersTbl").getElementsByTagName("tbody")[0];

function populateTable(){

    ordersTableBody.innerHTML = "";

    for(let i = 0; i < orders.length; i++){
        const newTableRow = ordersTableBody.insertRow();
        newTableRow.insertCell(0).innerHTML = orders[i].fullName;
        newTableRow.insertCell(1).innerHTML = orders[i].email;
        newTableRow.insertCell(2).innerHTML = orders[i].description;
        newTableRow.insertCell(3).innerHTML = '<button id="editBtn">Edit</button> <button id="removeBtn">Remove</button>';
    }
}

populateTable();