const orders = [
    { fullName: 'Ervis Trupja 1', email: 'ervis@trupja.com', description: 'Porosia pershkrimi' },
    { fullName: 'First Last 1', email: 'first@last.com', description: 'Porosia pershkrimi' }
  ];
  
  // Get reference to the table body
  const tableBody = document.getElementById('ordersTbl').getElementsByTagName('tbody')[0];
  
  // Function to populate the table body
  function populateTable() {
    // Clear existing rows
    tableBody.innerHTML = "";
  
    // Loop through each order and create a new row
    for (let i = 0; i < orders.length; i++) {
      const newRow = tableBody.insertRow();
      newRow.insertCell(0).innerHTML = orders[i].fullName;
      newRow.insertCell(1).innerHTML = orders[i].email;
      newRow.insertCell(2).innerHTML = orders[i].description;
      newRow.insertCell(3).innerHTML = `<button id="editBtn${i}">Edit</button> <button id="removeBtn${i}">Remove</button>`;
    }
  }
  
  // Call populateTable to initially populate the table
  populateTable();