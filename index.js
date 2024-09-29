// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]

    let order = [];
    let totak 0;

// Function to display menu items by category
function displayMenuItems(menu) {
    const menuConstainer = document.getElementById(""),
    // Get the menu container element from the HTML

    // Loop through each category and its items in the menu object

        // Create an element to represent the category
const categoryElement = document.createElement('order-items');
    categoryElement.textContext = category;
    menuContainer.appendChild(categoryElement);
        // Set the text content of the category element to the category name

        // Append the category element to the menu container

        // Create an element to represent a list of items
const itemsList = dpcumentr.createElement (ul);
    menuContainer.appendfChild(itemList);
        // Append a list of items element to the menu container

        // Loop through the items in the category and create list items
menu[category].forEach(item =>{
            // Create a list item element
const categoryElement.textContent = categoryElement('order-items');
    categoryElement.textContent = category;

    menuContainer.appendChild(categoryElement);
    
            // Set the text content of the list item element to the item name
    menu[category].forEach(item => {
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
    // Get the order items list and the order total element from the HTML
const orderList = document.getElementById('order-total');
    // Create a list item for the order
document.createElement('li');
    orderItemElement.textContext = itemName;
    orderList.appendChild(oderItemElement);

    order.push({item: itemName, price});

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuIyems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
