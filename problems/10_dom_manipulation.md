# 10. DOM Manipulation

## Easy

### 1. Text Content Manipulation:

* Write a function updateText() that selects a paragraph element by its id and updates its text content to a specified string.

#### Test cases:
* Call updateText() with a string parameter and verify that the text content of the targeted paragraph element is updated accordingly.
* Call updateText() with a different string parameter and verify that the text content is updated again.

### 2. Element Style Manipulation:

* Write a function changeColor() that selects a button element by its id and changes its background color to a specified color.

#### Test cases:
* Call changeColor() with a color parameter and verify that the background color of the targeted button element is changed accordingly.
* Call changeColor() with a different color parameter and verify that the background color is changed again.

### 3. Element Creation and Insertion:

* Write a function createAndInsertElement() that creates a new <div> element, sets its text content to a specified string, and appends it to an existing <div> element in the document.

#### Test cases:
* Call createAndInsertElement() and verify that a new <div> element with the specified text content is inserted into the targeted <div>.

## Medium

### 4. Event Handling with DOM Elements:

* Write a function addClickListener() that adds a click event listener to a button element and logs a message to the console when clicked.

#### Test cases:
* Call addClickListener() and click on the button element to verify that the message is logged to the console.
* Click on the button multiple times and verify that the message is logged each time.

### 5. Element Attribute Manipulation:

* Write a function updateImageSource() that selects an image element by its id and updates its src attribute to a specified image URL.

#### Test cases:
* Call updateImageSource() with an image URL parameter and verify that the src attribute of the targeted image element is updated accordingly.
* Call updateImageSource() with a different image URL parameter and verify that the src attribute is updated again.

### 6. Element Removal:

* Write a function removeElement() that selects a paragraph element by its id and removes it from the document.

#### Test cases:
* Call removeElement() and verify that the targeted paragraph element is removed from the document.

## Hard

### 7. Dynamic Element Creation and Event Handling:

* Write a function createButtonWithHandler() that dynamically creates a button element, sets its text content to a specified string, adds a click event listener to it, and appends it to an existing <div> element in the document. The event listener should log a message to the console when the button is clicked.

#### Test cases:
* Call createButtonWithHandler() and verify that a new button element with the specified text content is inserted into the targeted <div> and the event handler works as expected.

### 8. Element Style Animation:

* Write a function animateElement() that selects an HTML element by its id and animates its movement across the screen by changing its left CSS property over a specified duration.

#### Test cases:
* Call animateElement() and verify that the targeted element moves across the screen as expected.

### 9. Form Input Handling:

* Write a function handleFormSubmission() that selects a form element by its id, adds a submit event listener to it, and prevents the default form submission behavior. Instead, it logs the input values of the form fields to the console when the form is submitted.

#### Test cases:
* Call handleFormSubmission() and submit the form with different input values to verify that the input values are logged to the console.

### 10. Complex DOM Manipulation:

* Write a function createInteractiveList() that dynamically creates an unordered list (<ul>) with multiple list items (<li>), each containing a checkbox input (<input type="checkbox">) and a label. Add event listeners to the checkboxes to toggle a "checked" class on their parent list items when clicked. Additionally, add event listeners to the list items to remove them from the list when double-clicked.

#### Test cases:
* Call createInteractiveList() and verify that an interactive list is created with checkboxes and double-click functionality as described.