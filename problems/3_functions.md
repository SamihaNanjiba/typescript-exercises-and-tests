# 3. Functions

## Easy

### 1. Basic Closure:

* Write a function that returns another function which adds a given number to its argument.

#### Test cases:
* add(5)(2) -> 7
* add(3)(3) -> 6
* add(0)(5) -> 5
* add(-1)(1) -> 0
* add(4)(-4) -> 0

### 2. Function Composition:

* Write a function that takes two functions f and g and returns a new function that is the composition of f and g.

#### Test cases:
* compose(Math.sqrt, x => x * x)(4) -> 4
* compose(x => x + 1, x => x * 2)(2) -> 5
* compose(x => x * 2, x => x + 1)(2) -> 6
* compose(x => x - 1, x => x + 1)(5) -> 5
* compose(x => x + '!', x => 'Hello ' + x)('World') -> Hello World!

### 3. Currying:

* Write a function that takes another function f and an argument x, and returns a new function that takes an argument y and returns f(x, y).

#### Test cases:
* curry((x, y) => x + y)(2)(3) -> 5
* curry((x, y) => x * y)(4)(5) -> 20
* curry((x, y) => x - y)(10)(3) -> 7
* curry((x, y) => x / y)(8)(2) -> 4
* curry((x, y) => x + y)('Hello')(' World') -> Hello World

## Medium

### 4. Memoization:

* Write a function that takes another function and returns a memoized version of that function.

#### Test cases:
* memoizedFib(5) -> 5
* memoizedFib(10) -> 55
* memoizedFib(20) -> 6765
* memoizedFib(0) -> 0
* memoizedFib(1) -> 1

### 5. Partial Application:

* Write a function that takes another function f and some initial arguments, and returns a new function that takes the rest of the arguments and returns the result of f.

#### Test cases:
* partial((x, y, z) => x + y + z, 1, 2)(3) -> 6
* partial((x, y) => x * y, 5)(2) -> 10
* partial((a, b, c) => a + b + c, 'Hello', ' ')( 'World') -> Hello World
* partial((x, y) => x / y, 8)(2) -> 4
* partial((a, b) => a + b, 'Partially ')('Applied') -> Partially Applied

### 6. Debounce:

* Write a function that takes another function and a delay, and returns a debounced version of that function.

#### Test cases:
* debounce(console.log, 1000)('Hello') (logs "Hello" after 1 second)
* debounce(console.log, 500)('World') (logs "World" after 0.5 second)
* debounce(alert, 2000)('Alert') (alerts "Alert" after 2 seconds)
* debounce(alert, 3000)('Delayed') (alerts "Delayed" after 3 seconds)
* debounce(console.log, 1500)('Logging') (logs "Logging" after 1.5 second)

### 7. Throttle:

* Write a function that takes another function and a delay, and returns a throttled version of that function.

#### Test cases:
* throttle(console.log, 1000)('Hello') (logs "Hello" immediately, ignores subsequent calls for 1 second)
* throttle(console.log, 2000)('World') (logs "World" immediately, ignores subsequent calls for 2 seconds)
* throttle(alert, 1500)('Alert') (alerts "Alert" immediately, ignores subsequent calls for 1.5 seconds)
* throttle(alert, 1000)('Throttled') (alerts "Throttled" immediately, ignores subsequent calls for 1 second)
* throttle(console.log, 3000)('Logging') (logs "Logging" immediately, ignores subsequent calls for 3 seconds)

## Hard

### 8. Recursive Function:

* Write a function that calculates the nth Fibonacci number using recursion and memoization.

#### Test cases:
* fib(5) -> 5
* fib(10) -> 55
* fib(20) -> 6765
* fib(0) -> 0
* fib(1) -> 1

### 9. Function Bind:

* Write a function that simulates the bind method.

#### Test cases:
* const boundFunc = bind(function (a, b) { return this.x + a + b; }, { x: 1 }, 2); boundFunc(3) -> 6
* const boundFunc = bind(function (a, b) { return this.x * a * b; }, { x: 2 }, 2); boundFunc(3) -> 12
* const boundFunc = bind(function (a, b) { return this.x - a - b; }, { x: 5 }, 2); boundFunc(1) -> 2
* const boundFunc = bind(function (a, b) { return this.x / a / b; }, { x: 8 }, 2); boundFunc(2) -> 2
* const boundFunc = bind(function (a, b) { return this.x + a - b; }, { x: 10 }, 5); boundFunc(3) -> 8

### 10. Function Compose:

* Write a function that takes an array of functions and returns their composition.

#### Test cases:
* composeFunctions([Math.sqrt, x => x * x])(4) -> 4
* composeFunctions([x => x + 1, x => x * 2])(2) -> 5
* composeFunctions([x => x * 2, x => x + 1])(2) -> 6
* composeFunctions([x => x - 1, x => x + 1])(5) -> 5
* composeFunctions([x => x + '!', x => 'Hello ' + x])('World') -> Hello World!
