const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

let order = [];
let total = 0; // Initialize total, but we will not assume any prices

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuContainer = document.getElementById("menu-container");

    // Loop through each category in the menu object
    for (let category in menu) {
        // Create an element to represent the category
       const categoryElement = document.createElement('order-items');
        categoryElement.textContent = category; 
        menuContainer.appendChild(categoryElement);

        // Create an element to represent a list of items
        const itemsList = document.createElement('ul');
        menuContainer.appendChild(itemsList);

        // Loop through the items in the category and create list items
        menu[category].forEach(item => {
            // Create a list item element
            const itemElement = document.createElement('li');
            itemElement.textContent = item;

            // Attach a click event listener to the list item to add it to the order
            itemElement.addEventListener('click', () => {
                addToOrder(item);
            });

            // Append the list item to the list of items
            itemsList.appendChild(itemElement);
        });
    }
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list from the HTML
    const orderList = document.getElementById('order-list');

    // Create a list item for the order
    const orderItemElement = document.createElement('li'); 
    orderItemElement.textContent = itemName; 
    orderList.appendChild(orderItemElement);

    order.push(itemName);

    const orderTotalElement = document.getElementById('order-total');
    orderTotalElement.textContent = `Total Items: ${order.length}`;
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
