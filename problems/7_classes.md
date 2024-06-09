# 7. Classes

## Easy

### 1. Class Creation:

* Create a class Rectangle with properties width and height. Include a method getArea() that calculates and returns the area of the rectangle.

#### Test cases:
* Create a rectangle with width 5 and height 10, and call getArea(). It should return 50.
* Create a rectangle with width 3 and height 7, and call getArea(). It should return 21.
* Create a rectangle with width 8 and height 4, and call getArea(). It should return 32.
* Create a rectangle with width 6 and height 9, and call getArea(). It should return 54.
* Create a rectangle with width 0 and height 12, and call getArea(). It should return 0.

### 2. Inheritance:

* Create a class Square that inherits from Rectangle. The Square class should only require a single parameter side (the length of one side), and should set both width and height to this value. Override the getArea() method inherited from Rectangle to calculate the area of the square.

#### Test cases:
* Create a square with side 4, and call getArea(). It should return 16.
* Create a square with side 6, and call getArea(). It should return 36.
* Create a square with side 10, and call getArea(). It should return 100.
* Create a square with side 3, and call getArea(). It should return 9.
* Create a square with side 0, and call getArea(). It should return 0.

### 3. Static Method:

* Add a static method areEqual(rect1, rect2) to the Rectangle class that compares two rectangles based on their dimensions and returns true if they have the same area, and false otherwise.

#### Test cases:
* Create two rectangles with dimensions (4, 5) and (6, 2) respectively, and call Rectangle.areEqual(rect1, rect2). It should return true.
* Create two rectangles with dimensions (3, 8) and (5, 5) respectively, and call Rectangle.areEqual(rect1, rect2). It should return false.
* Create two rectangles with dimensions (7, 3) and (3, 7) respectively, and call Rectangle.areEqual(rect1, rect2). It should return true.
* Create two rectangles with dimensions (2, 4) and (8, 1) respectively, and call Rectangle.areEqual(rect1, rect2). It should return false.
* Create two rectangles with dimensions (0, 5) and (0, 5) respectively, and call Rectangle.areEqual(rect1, rect2). It should return true.

## Medium

### 4. Getter and Setter:

* Add getter and setter methods for width and height in the Rectangle class. The setter methods should ensure that the dimensions are positive numbers.

#### Test cases:
* Create a rectangle with width 5 and height 10. Change the width to -3 using the setter method, and then call getArea(). It should return 50.
* Create a rectangle with width 4 and height 6. Change the height to 0 using the setter method, and then call getArea(). It should return 24.
* Create a rectangle with width 8 and height 12. Change both width and height to -2 using the setter methods, and then call getArea(). It should return 96.
* Create a rectangle with width 7 and height 9. Change the width to 0 using the setter method, and then call getArea(). It should return 63.
* Create a rectangle with width 6 and height 3. Change both width and height to 10 using the setter methods, and then call getArea(). It should return 100.

### 5. Class Extension:

* Create a class Circle with property radius. Include a method getArea() that calculates and returns the area of the circle. Ensure the value of radius is always positive using a getter and setter.

#### Test cases:
* Create a circle with radius 5, and call getArea(). It should return approximately 78.54.
* Create a circle with radius 8, and call getArea(). It should return approximately 201.06.
* Create a circle with radius 12, and call getArea(). It should return approximately 452.39.
* Create a circle with radius -3.5. It should throw an error indicating that the radius must be positive.
* Create a circle with radius 0, and call getArea(). It should return 0.

### 6. Class Composition:

* Create a class Person with properties name, age, and gender. Then create a class Student that extends Person and adds a property studentId. Finally, create a class Teacher that extends Person and adds a property subject.

#### Test cases:
* Create a student named Alice, aged 20, female, with student ID 12345.
* Create a teacher named Bob, aged 35, male, teaching Math.
* Verify that Alice has the correct properties: name, age, gender, and student ID.
* Verify that Bob has the correct properties: name, age, gender, and subject.

## Hard

### 7. Class Decorator:

* Implement a class decorator @sealed that prevents any class it's applied to from being inherited from. If a subclass of a sealed class is attempted to be * created, it should throw an error.

#### Test cases:
* Create a sealed class SealedClass and attempt to extend it with another class. It should throw an error.
* Create a non-sealed class UnsealedClass and extend it with another class. It should not throw an error.

### 8. Event Handling with Classes:

* Create a class EventEmitter that allows registration and triggering of event handlers. It should have methods on(eventName, handler) to register an event handler, and emit(eventName, eventData) to trigger all registered handlers for a given event with optional data.

#### Test cases:
* Create an EventEmitter instance and register a handler for the event 'click'. Trigger the 'click' event with some data and ensure the handler is called with the correct data.
* Register multiple handlers for the same event and trigger the event. Ensure all handlers are called.
* Register handlers for multiple events, trigger each event, and ensure the corresponding handlers are called.
* Register handlers for events, then unregister them and trigger the events. Ensure the handlers are not called after unregistering.

### 9. Observable Pattern:

* Implement a class Observable that represents an observable object. It should have methods subscribe(observer) to subscribe an observer to receive updates, unsubscribe(observer) to unsubscribe an observer, and notify(data) to notify all subscribed observers with new data.

#### Test cases:
* Create an Observable instance and subscribe an observer to it. Then notify the observable with some data and ensure the observer receives the data.
* Subscribe multiple observers to the observable, then notify with data and ensure all observers receive the data.
* Subscribe an observer, then unsubscribe it and notify with data. Ensure the observer does not receive the data after unsubscribing.
* Unsubscribe an observer that was never subscribed and ensure it does not throw errors.

### 10. Mixin Composition:
* Create a mixin Serializable that adds methods serialize() and deserialize(data) to a class. The serialize() method should return a JSON representation of the object, and the deserialize(data) method should update the object's properties based on the provided data.

#### Test cases:
* Create a class Person and apply the Serializable mixin to it. Verify that the serialize() and deserialize(data) methods work as expected.
* Create a class Product and apply the Serializable mixin to it. Verify that the serialize() and deserialize(data) methods work as expected.
* Create instances of Person and Product, serialize them, deserialize the data, and ensure the objects are restored correctly.
* Serialize an object, modify the serialized data, and then deserialize it. Ensure the object is updated accordingly.