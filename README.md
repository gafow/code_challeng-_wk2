# Interactive Shopping List

This project consists of a simple interactive shopping list web application built using HTML, CSS, and JavaScript.

## Files Included

- **index.html**: This is the main HTML file that defines the structure and content of the shopping list application.
- **main.css**: The CSS file that styles the elements in the HTML file.
- **index.js**: The JavaScript file that provides functionality to the shopping list, handling interactions like adding items, marking items as purchased, and clearing the list.

## Features

- **Input Field**: Allows users to input items they want to add to the shopping list.
- **List Container**: Displays the added items in an unordered list (`<ul>`) with each item as a list item (`<li>`).
- **Buttons**:
  - **Add**: Clicking this button adds the item typed in the input field to the list.
  - **Mark Purchased**: This button is intended to mark selected items as purchased (though functionality isn't implemented in the provided code).
  - **Clear List**: Clears all items from the shopping list.

## Usage

1. Clone or download the repository.
2. Open `index.html` in a web browser.
3. Type an item in the input field and click "Add" to add it to the list.
4. Use the "Clear List" button to remove all items from the list.

## Notes

- The application lacks functionality for marking items as purchased (`Mark Purchased` button), which would require additional JavaScript code.
- The styling (`main.css`) can be modified to change the appearance of the application.

Feel free to fork and modify this project according to your needs!



Sure, here's a summary for your `index.js` file:

### index.js Summary

#### Global Variables
- `CONTAINER`: Represents the DOM element with id `list_container`.
- `INPUT`: Represents the DOM element with id `input`.
- `shopping_items`: Array to store shopping items, each represented as an object with `name` and `isPurchased` properties.

#### Functions

1. **renderItems()**
   - Renders each item in `shopping_items` array as a list item (`<li>`).
   - Each item is displayed with its name and a button to mark it as purchased (`Purchase` or `Purchased` based on `isPurchased` property).
   - Event handler (`onclick`) for the purchase button calls `purchasedItem()`.

2. **addItems()**
   - Retrieves value from `INPUT`.
   - Adds a new item object (`name` and `isPurchased: false`) to `shopping_items`.
   - Clears `INPUT` field.
   - Clears `CONTAINER` content and calls `renderItems()` to update the list.

3. **purchasedItem(item)**
   - Finds the item object in `shopping_items` array by its `name`.
   - Sets `isPurchased` property of the found object to `true`.
   - Clears `CONTAINER` content and calls `renderItems()` to update the list with the modified item.


