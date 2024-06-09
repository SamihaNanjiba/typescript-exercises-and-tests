# 9. Modules

## Easy

### 1. Basic Module Export:

* Create a module mathUtils that exports two functions: add and subtract. These functions should perform addition and subtraction operations on two numbers respectively.

#### Test cases:
* Import the mathUtils module into another file and use the add function to add two numbers.
* Import the mathUtils module into another file and use the subtract function to subtract one number from another.

### 2. Default Export:

* Create a module greeting that exports a default function sayHello which takes a name as a parameter and returns a greeting string.

#### Test cases:
* Import the greeting module into another file and use the sayHello function to greet a specific name.
* Import the greeting module into another file and alias the sayHello function to a different name, then use it to greet a different name.

### 3. Named Exports:

* Create a module utilityFunctions that exports multiple named functions such as capitalize, reverseString, and generateRandomNumber.

#### Test cases:
* Import the utilityFunctions module into another file and use each of the named functions exported from it.
Medium

### 4. Module with Dependencies:

* Create two modules: mathOperations and logUtils. mathOperations should export functions for basic math operations (add, subtract, multiply, divide). logUtils should export a function log that logs messages to the console.

#### Test cases:
* Import both modules into another file, perform some mathematical operations using functions from mathOperations, and log the results using log function from logUtils.

### 5. Module with Configuration:

* Create a module config that exports a configuration object with key-value pairs for various settings (e.g., API endpoints, timeout durations). Import this module into other files to access and utilize these configuration settings.

#### Test cases:
* Import the config module into another file and use its exported configuration object to configure an API endpoint for making HTTP requests.
* Import the config module into another file and update one of the configuration settings dynamically.

### 6. Module with Classes:

* Create a module shapes that exports a class Rectangle with properties width and height, and a method calculateArea() that returns the area of the rectangle. Import this module into another file and create instances of the Rectangle class to calculate their areas.

#### Test cases:
* Import the shapes module into another file, create instances of the Rectangle class with different dimensions, and calculate the areas of these rectangles using the calculateArea method.
Hard

### 7. Module with Asynchronous Operations:

* Create a module asyncTasks that exports an asynchronous function fetchData which fetches data from a specified URL using fetch API. Import this module into another file and use the fetchData function to retrieve data from an API endpoint.

#### Test cases:
* Import the asyncTasks module into another file and use the fetchData function to fetch data from a mock API endpoint, then perform operations on the fetched data.

### 8. Module with Error Handling:

* Create a module fileSystem that exports functions for reading from and writing to files (readFile, writeFile). Implement error handling mechanisms in these functions to handle potential file system errors (e.g., file not found, permission denied).

#### Test cases:
* Import the fileSystem module into another file and use the readFile function to attempt to read from a non-existent file. Verify that appropriate error handling is applied.
* Import the fileSystem module into another file and use the writeFile function to attempt to write to a read-only file. Verify that appropriate error handling is applied.

### 9. Module with Caching:

* Create a module dataCache that exports functions for caching data (cacheData, getDataFromCache). Implement a caching mechanism to store data in memory and retrieve it efficiently. Use a Map or an object to store cached data.

#### Test cases:
* Import the dataCache module into another file and use the cacheData function to cache some data. Then use the getDataFromCache function to retrieve the cached data and verify its correctness.

### 10. Module with Dynamic Import:

* Create a module dynamicLoader that exports an asynchronous function loadModule which dynamically imports and returns another module based on a specified condition or input parameter. Import this module into another file and use the loadModule function to load different modules dynamically at runtime.

#### Test cases:
* Import the dynamicLoader module into another file and use the loadModule function to dynamically import and execute different modules based on different conditions or input parameters.