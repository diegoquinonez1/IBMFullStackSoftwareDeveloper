const sales = [
    { id: 1, item: 'Laptop', quantity: 12, price: 1200 },
    { id: 2, item: 'Phone', quantity: 30, price: 800 },
    { id: 3, item: 'Tablet', quantity: 20, price: 600 },
    { id: 4, item: 'Monitor', quantity: 15, price: 300 }
];

function displaySales() {
    const salesDetails = sales
    .map(sale => `<p>${sale.id}: ${sale.item} - Quantity: ${sale.quantity} - Price: $${sale.price}</p>`)
    .join('');

    document.getElementById('salesDetails').innerHTML = salesDetails;
}

function calculateTotalRevenue() {
    const totalRevenue = sales.reduce((acc, sale) => acc + (sale.quantity * sale.price), 0);
    alert(`Total Revenue: $${totalRevenue}`);
}


function calculateTotalSales(sales) {
    let totalSales = 0;
    for (let i = 0; i < sales.length; i++) {
        totalSales += sales[i].quantity * sales[i].price;
    }
    return totalSales;
}

function displayHighValueSales() {
    const highValueSales = sales.filter(sale => (sale.quantity * sale.price) > 1000);
    const highValueSalesDisplay = highValueSales.map(sale => `<p>${sale.id}: ${sale.item} - Quantity: ${sale.quantity} - Price: $${sale.price}</p>`).join('');
    document.getElementById('salesDetails').innerHTML = highValueSalesDisplay;
}

function generateReceipt(sales) {
    let grandTotal = 0;
    console.log('Receipt:');
    console.log('-------------------------');
    // sales.forEach(sale => {
    //     const total = sale.quantity * sale.price;
    //     grandTotal += total;
    //     console.log(`Item: ${sale.item}, Quantity: ${sale.quantity}, Price: $${sale.price}, Total: $${total.toFixed(2)}`);
    // });

    for (let i = 0; i < sales.length; i++) {
        const sale = sales[i];
        const total = sale.quantity * sale.price;
        grandTotal += total;
        console.log(`Item: ${sale.item}, Quantity: ${sale.quantity}, Price: $${sale.price}, Total: $${total.toFixed(2)}`);
    }

    console.log('-------------------------');
    console.log(`\nTotal Sales: $${grandTotal.toFixed(2)}`);
}

function generateReceipt() {
    let receipt = 'Receipt:\n\n';
    sales.forEach(sale => {
        receipt += `Item: ${sale.item}, Quantity: ${sale.quantity}, Price: $${sale.price}, Total: $${(sale.quantity * sale.price).toFixed(2)}\n`;
    });
    receipt += `\nTotal Sales: $${calculateTotalSales(sales).toFixed(2)}`;
    return receipt;
}

function showReceipt() {
    const receipt = generateReceipt(sales);
    alert(receipt);
}

const passwords = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
    { username: 'admin', password: 'adminpass' }
];

function validateLogin() {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    const user = passwords.find(user => user.username === usernameInput && user.password === passwordInput);

    if (user) {
        alert('Login successful!');
    } else {
        alert('Invalid username or password.');
    }
}

function validatePasswords(passwords) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum eight characters, at least one letter and one number
    // return passwords.every(user => regex.test(user.password));

    for (let i = 0; i < passwords.length; i++) {
        if (!regex.test(passwords[i].password)) {
            console.log('Password validation failed for user:', passwords[i].username);
            return false;
        }
        else {
            console.log('Password validation passed for user:', passwords[i].username);
            return true;
        }
    }
}

function addUser(username, password) {
    if (passwords.some(user => user.username === username)) {
        alert('Username already exists.');
        return;
    }

    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
        alert('Password must be at least 8 characters long and include at least one letter and one number.');
        return;
    }
    
    passwords.push({ username, password });
    alert('User added successfully.');
}

const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1200, sales: 150 },
    { id: 2, name: 'Phone', category: 'Electronics', price: 800, sales: 300 },
    { id: 3, name: 'Tablet', category: 'Electronics', price: 600, sales: 200 },
    { id: 4, name: 'Monitor', category: 'Electronics', price: 300, sales: 100 },
    { id: 5, name: 'Desk Chair', category: 'Furniture', price: 150, sales: 80 },
    { id: 6, name: 'Office Desk', category: 'Furniture', price: 400, sales: 50 }
];

// Usa un bucle para iterar a través del array y verificar el nivel de stock de cada producto
function checkStockLevels(products) {
    // products.forEach(product => {
    //     if (product.sales > 0) {
    //         console.log(`Product: ${product.name}, Stock Level: In Stock`);
    //     } else {
    //         console.log(`Product: ${product.name}, Stock Level: Out of Stock`);
    //     }
    // });
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        if (product.sales > 0) {
            console.log(`Product: ${product.name}, Stock Level: In Stock`);
        } else {
            console.log(`Product: ${product.name}, Stock Level: Out of Stock`);
        }
    }
}