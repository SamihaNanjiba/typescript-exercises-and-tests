# 8. Event Handling

## Easy

### 1. Basic Event Listener:

* Create a function addClickListener() that adds a click event listener to a specified HTML element. When clicked, it should log "Element clicked!" to the console.

#### Test cases:
* Add a click event listener to a button element and click it. Verify that "Element clicked!" is logged to the console.
* Add a click event listener to a div element and click it. Verify that "Element clicked!" is logged to the console.
* Add a click event listener to a link element and click it. Verify that "Element clicked!" is logged to the console.

### 2. Custom Event Listener:

* Create a custom event called "statusUpdate" that can be dispatched on any HTML element. When dispatched, it should log "Status updated!" to the console.

#### Test cases:
* Dispatch the "statusUpdate" event on a button element and verify that "Status updated!" is logged to the console.
* Dispatch the "statusUpdate" event on a div element and verify that "Status updated!" is logged to the console.
* Dispatch the "statusUpdate" event on a link element and verify that "Status updated!" is logged to the console.

### 3. Event Propagation:

* Create an HTML structure with nested elements (e.g., a div inside a div). Add click event listeners to both the parent and child elements. When clicked, each element should log its tag name to the console.

#### Test cases:
* Click on the parent element and verify that its tag name is logged to the console.
* Click on the child element and verify that both its tag name and the parent's tag name are logged to the console.
* Click on an inner child element and verify that its tag name, its parent's tag name, and the top-level parent's tag name are logged to the console.

## Medium

### 4. Event Delegation:

* Create an unordered list (<ul>) with multiple list items (<li>). Add a click event listener to the list (<ul>) and handle the click event by logging the text content of the clicked list item (<li>).

#### Test cases:
* Click on different list items and verify that their text content is logged to the console.
* Add new list items dynamically and click on them. Verify that their text content is logged to the console as well.
* Click on the empty space within the list (not on any list item) and verify that nothing is logged to the console.

### 5. Multiple Event Listeners:

* Create an HTML input element (e.g., <input type="text">). Add multiple event listeners for the input event that perform different actions (e.g., logging the input value, changing the background color of the input field).

#### Test cases:
* Type into the input field and verify that the input value is logged to the console.
* Type into the input field and verify that the background color of the input field changes dynamically.
* Add or remove event listeners dynamically and verify that the corresponding actions are performed/not performed when typing into the input field.

### 6. Event Bubbling:

* Create a nested structure of HTML elements with event listeners attached to each level (e.g., div > section > button). Click on the innermost button and observe the order in which event listeners are triggered due to event bubbling.

#### Test cases:
* Click on the innermost button and verify that event listeners are triggered in the order of their nesting (from innermost to outermost).
* Add event listeners with different event types (e.g., click, mouseover) and verify that they follow the same bubbling order.
* Stop event propagation within one of the event listeners and verify that it prevents further bubbling of the event.

## Hard

### 7. Event Emitter Class:

* Implement an Event Emitter class that allows registering event listeners for custom events and emitting those events with optional data. Ensure that listeners are invoked asynchronously to mimic the browser's event handling behavior.

#### Test cases:
* Create an instance of the Event Emitter class, register event listeners for custom events, emit those events with some data, and verify that the listeners are invoked with the correct data.
* Test the behavior of multiple event listeners for the same event, including their order of invocation and asynchronous execution.
* Test edge cases such as registering/unregistering listeners, emitting events with no listeners, etc.

### 8. Drag and Drop Implementation:

* Implement a drag and drop functionality using native JavaScript event handling. Create draggable elements and drop targets on an HTML page. Implement event listeners for mouse events (mousedown, mousemove, mouseup) to handle dragging and dropping of elements.

#### Test cases:
* Drag an element and drop it onto a target area, then verify that the drop event is handled correctly.
* Implement additional features such as constraining movement within a specified area, snapping to grid, or visual feedback during dragging.
* Test the behavior with multiple draggable elements and drop targets, including scenarios with overlapping elements.

### 9. Event Bus Implementation:

* Implement an Event Bus pattern that acts as a central communication hub for different parts of an application. Components can subscribe to specific events and publish events with optional data. Ensure that components can communicate effectively through the event bus.

#### Test cases:
* Create multiple components that subscribe to different events on the event bus and verify that they receive the expected data when events are published.
* Test scenarios where components dynamically subscribe/unsubscribe from events during runtime and ensure that event handling remains consistent.
* Implement error handling mechanisms for scenarios such as publishing events with no subscribers or subscribing to non-existent events.

### 10. Cross-Browser Compatibility:

* Implement event handling functionality that works consistently across different web browsers (e.g., Chrome, Firefox, Safari, Edge). Identify and handle any browser-specific quirks or differences in event handling behavior to ensure a consistent user experience.

#### Test cases:
* Test the event handling functionality on multiple web browsers and verify consistent behavior across all tested browsers.
* Address any identified issues or inconsistencies in event handling and implement browser-specific workarounds or polyfills as needed.
* Perform regression testing after making changes to ensure that existing functionality remains unaffected across different browsers.