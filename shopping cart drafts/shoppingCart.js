// declare dictionary
// keys = items; values = quantities of items

// FUNCTIONS:
// if "add to cart" pressed on page, increase value (quantity) of the current key (item)
// if increase and decrease quantity buttons are pressed on checkout page, change the values and keys
// if quantity of an item is > 0, display it on the page
// if quantity of an item == 0, hide it on the page
// initialize quantities of all items in the site to 0

/*
def initializeVals():
    access ids of all items in the site
    set quantities = 0 for each time by setting the value of key:value pairs to 0
*/

/* 
def addToCart():
    find which item was added to card through id access
    have the value associated with the item key +=1
    displayItem() // to check if the visibility of any items needs to be changed

    BASIC CODE -
        let itemElement = document.getElementById(itemId);
        
        if (cart[itemId]) {
            // Increment the value associated with the item key
            cart[itemId] += 1;
        } else {
            // If the item is not already in the cart, add it with an initial value of 1
            cart[itemId] = 1;
        }

        // Check visibility or update the item
        displayItem(itemElement, cart[itemId]);
*/

/* 
// for the buttons to increase/decrease quantity of an item on the checkout page
def quantityButtons():
    find which item was added to card through id access
    have the value associated with the item key +=1
    displayItem() // to check if the visibility of any items needs to be changed
*/

/* 
def displayItem():
    if quantity of an item is > 0, display it on the checkout page
    if quantity of an item == 0, hide it on the checkout page
    *** each time the quantity of an item changes, call this function
*/
