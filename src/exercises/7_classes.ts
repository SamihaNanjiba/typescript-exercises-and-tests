// Create a class Rectangle with properties width and height. Include a method getArea() that calculates and returns the area of the rectangle.

// Create a class Square that inherits from Rectangle. The Square class should only require a single parameter side (the length of one side), and should set both width and height to this value. Override the getArea() method inherited from Rectangle to calculate the area of the square.

// Add a static method areEqual(rect1, rect2) to the Rectangle class that compares two rectangles based on their dimensions and returns true if they have the same area, and false otherwise.

// Add getter and setter methods for width and height in the Rectangle class. The setter methods should ensure that the dimensions are positive numbers.

// Create a class Circle with property radius. Include a method getArea() that calculates and returns the area of the circle. Ensure the value of radius is always positive using a getter and setter.

// Create a class Person with properties name, age, and gender. Then create a class Student that extends Person and adds a property studentId. Finally, create a class Teacher that extends Person and adds a property subject.

// Implement a class decorator @sealed that prevents any class it's applied to from being inherited from. If a subclass of a sealed class is attempted to be * created, it should throw an error.

// Create a class EventEmitter that allows registration and triggering of event handlers. It should have methods on(eventName, handler) to register an event handler, and emit(eventName, eventData) to trigger all registered handlers for a given event with optional data.

// Implement a class Observable that represents an observable object. It should have methods subscribe(observer) to subscribe an observer to receive updates, unsubscribe(observer) to unsubscribe an observer, and notify(data) to notify all subscribed observers with new data.

// Create a mixin Serializable that adds methods serialize() and deserialize(data) to a class. The serialize() method should return a JSON representation of the object, and the deserialize(data) method should update the object's properties based on the provided data.