# 6. Asynchronous Programming

## Easy

### 1. Simple Timeout:

* Write a function that takes a callback function and a delay in milliseconds. The function should invoke the callback after the specified delay.

#### Test cases:
* delayedCallback(() => console.log('Callback executed'), 1000) should log 'Callback executed' after 1 second
* delayedCallback(() => console.log('Hello'), 2000) should log 'Hello' after 2 seconds
* delayedCallback(() => console.log('World'), 500) should log 'World' after 0.5 seconds
* delayedCallback(() => console.log('Async'), 3000) should log 'Async' after 3 seconds
* delayedCallback(() => console.log('Programming'), 0) should log 'Programming' immediately

### 2. Fetch Data:

* Write a function that makes a GET request to a specified URL and returns a Promise that resolves with the response data.

#### Test cases:
* fetchData('https://jsonplaceholder.typicode.com/posts/1') should resolve with the data of the first post
* fetchData('https://jsonplaceholder.typicode.com/posts/2') should resolve with the data of the second post
* fetchData('https://jsonplaceholder.typicode.com/posts/100') should resolve with the data of the 100th post
* fetchData('https://jsonplaceholder.typicode.com/users/1') should resolve with the data of the first user
* fetchData('https://jsonplaceholder.typicode.com/users/2') should resolve with the data of the second user

### 3. Sequential Execution:

* Write a function that takes an array of asynchronous functions (callbacks or Promises) and executes them sequentially, waiting for each one to finish before starting the next one.

#### Test cases:
* sequentialExecution([() => delayedCallback(() => console.log('First'), 1000), () => delayedCallback(() => console.log('Second'), 2000), () => delayedCallback(() => console.log('Third'), 500)]) should log 'First' after 1 second, then 'Second' after 2 seconds, and finally 'Third' after 2.5 seconds
* sequentialExecution([() => fetchData('https://jsonplaceholder.typicode.com/posts/1'), () => fetchData('https://jsonplaceholder.typicode.com/posts/2'), () => fetchData('https://jsonplaceholder.typicode.com/posts/3')]) should resolve with an array containing the data of the first three posts, in order
* sequentialExecution([]) should resolve immediately with an empty array
* sequentialExecution([() => delayedCallback(() => console.log('One'), 1000), () => delayedCallback(() => console.log('Two'), 500)]) should log 'One' after 1 second, then 'Two' after 1.5 seconds

## Medium

### 4. Parallel Execution:

* Write a function that takes an array of asynchronous functions (callbacks or Promises) and executes them in parallel, returning a Promise that resolves with an array of their results.

#### Test cases:
* parallelExecution([() => delayedCallback(() => 'First', 1000), () => delayedCallback(() => 'Second', 2000), () => delayedCallback(() => 'Third', 500)]) should resolve with ['First', 'Second', 'Third'] after 2 seconds
* parallelExecution([() => fetchData('https://jsonplaceholder.typicode.com/posts/1'), () => fetchData('https://jsonplaceholder.typicode.com/posts/2'), () => fetchData('https://jsonplaceholder.typicode.com/posts/3')]) should resolve with an array containing the data of the first three posts, in any order
* parallelExecution([]) should resolve immediately with an empty array
* parallelExecution([() => delayedCallback(() => 'One', 1000), () => delayedCallback(() => 'Two', 500)]) should resolve with ['One', 'Two'] after 1 second

### 5. Promise All Settled:

* Write a function that takes an array of Promises and returns a Promise that resolves with an array of objects representing the outcome of each Promise, whether it was fulfilled or rejected.

#### Test cases:
* promiseAllSettled([fetchData('https://jsonplaceholder.typicode.com/posts/1'), fetchData('https://jsonplaceholder.typicode.com/posts/2'), fetchData('https://jsonplaceholder.typicode.com/posts/3')]) should resolve with an array containing the outcomes of fetching the first three posts
* promiseAllSettled([delayedCallback(() => 'Success', 1000), delayedCallback(() => 'Error', 2000)]) should resolve with an array containing one object representing the fulfilled Promise and one object representing the rejected Promise
* promiseAllSettled([]) should resolve immediately with an empty array
* promiseAllSettled([fetchData('https://jsonplaceholder.typicode.com/posts/1'), fetchData('https://jsonplaceholder.typicode.com/posts/invalid'), fetchData('https://jsonplaceholder.typicode.com/posts/3')]) should resolve with an array containing the outcomes of fetching the first and third posts, and a rejection reason for the second one

### 6. Asynchronous Map:
* Write a function that takes an array and an asynchronous mapping function, and returns a Promise that resolves with an array of mapped values.

#### Test cases:
* asyncMap([1, 2, 3], async (x) => x * 2) should resolve with [2, 4, 6]
* asyncMap(['a', 'b', 'c'], async (x) => x.toUpperCase()) should resolve with ['A', 'B', 'C']
* asyncMap([], async (x) => x * 2) should resolve with []
* asyncMap([1, 2, 3], async (x) => delayedCallback(() => x * 2, 1000)) should resolve with [2, 4, 6] after 1 second

## Hard

### 7. Throttle:

* Write a function that takes a callback function and a time interval. The function should ensure that the callback is not called more than once during the specified interval.

#### Test cases:
* Execute a throttled callback function every 500 milliseconds, ensuring it's not called more frequently than that.
* Execute a throttled callback function every 200 milliseconds, ensuring it's not called more frequently than that.
* Execute a throttled callback function every 1000 milliseconds, ensuring it's not called more frequently than that.
* Execute a throttled callback function every 300 milliseconds, ensuring it's not called more frequently than that.
* Execute a throttled callback function every 100 milliseconds, ensuring it's not called more frequently than that.

### 8. Debounce:

* Write a function that takes a callback function and a delay. The function should ensure that the callback is only called after a certain amount of time has passed without being called again.

#### Test cases:
* Execute a debounced callback function after it has not been called for 500 milliseconds.
* Execute a debounced callback function after it has not been called for 200 milliseconds.
* Execute a debounced callback function after it has not been called for 1000 milliseconds.
* Execute a debounced callback function after it has not been called for 300 milliseconds.
* Execute a debounced callback function after it has not been called for 100 milliseconds.

### 9. Caching with Async Function:

* Write a function that takes an asynchronous function and returns a cached version of it. The cached version should memoize the results of the original function to avoid redundant computations.

#### Test cases:
* const cachedFetchData = cacheAsyncFunction(fetchData); cachedFetchData('https://jsonplaceholder.typicode.com/posts/1') should fetch the data from the URL and cache it, subsequent calls should return the cached data without making another request
* const cachedFetchData = cacheAsyncFunction(fetchData); cachedFetchData('https://jsonplaceholder.typicode.com/posts/2') should fetch the data from the URL and cache it, subsequent calls should return the cached data without making another request
* const cachedFetchData = cacheAsyncFunction(fetchData); cachedFetchData('https://jsonplaceholder.typicode.com/posts/3') should fetch the data from the URL and cache it, subsequent calls should return the cached data without making another request
* const cachedFetchData = cacheAsyncFunction(fetchData); cachedFetchData('https://jsonplaceholder.typicode.com/posts/invalid') should fetch the data from the URL and cache it, subsequent calls should return the cached data without making another request
* const cachedFetchData = cacheAsyncFunction(fetchData); cachedFetchData('https://jsonplaceholder.typicode.com/posts/1') should return the cached data without making another request

### 10. Race Condition Prevention:

* Write a function that takes an asynchronous function and a lock object. The function should ensure that only one call to the asynchronous function can be made at a time, even if it is called concurrently.

#### Test cases:
* Execute an asynchronous function multiple times concurrently, ensuring that only one execution happens at a time.
* Execute an asynchronous function multiple times concurrently, ensuring that only one execution happens at a time.
* Execute an asynchronous function multiple times concurrently, ensuring that only one execution happens at a time.
* Execute an asynchronous function multiple times concurrently, ensuring that only one execution happens at a time.
* Execute an asynchronous function multiple times concurrently, ensuring that only one execution happens at a time.