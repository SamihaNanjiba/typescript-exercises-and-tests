# 5. Promises

## Easy

### 1. Basic Promise Creation:

* Write a function that returns a Promise. The Promise should resolve after a given delay with a message.

#### Test cases:
* delayedMessage(1000) resolves to 'Message after 1 second'
* delayedMessage(2000) resolves to 'Message after 2 seconds'
* delayedMessage(500) resolves to 'Message after 0.5 seconds'
* delayedMessage(3000) resolves to 'Message after 3 seconds'
* delayedMessage(0) resolves immediately

### 2. Promise Chaining:

* Write a function that returns a Promise which resolves to a string. Chain another Promise to it that adds a suffix to the resolved string.

#### Test cases:
* chainedPromise('Hello') resolves to 'Hello World!'
* chainedPromise('Open') resolves to 'Open Sesame!'
* chainedPromise('Good') resolves to 'Goodbye!'
* chainedPromise('Promises') resolves to 'Promises are great!'
* chainedPromise('') resolves to ' World!'

### 3. Promise Rejection:

* Write a function that returns a Promise which rejects after a certain delay with an error message.

#### Test cases:
* rejectAfterDelay(1000) rejects with 'Error after 1 second'
* rejectAfterDelay(2000) rejects with 'Error after 2 seconds'
* rejectAfterDelay(500) rejects with 'Error after 0.5 seconds'
* rejectAfterDelay(3000) rejects with 'Error after 3 seconds'
* rejectAfterDelay(0) rejects immediately

## Medium

### 4. Promise All:

* Write a function that takes an array of Promises and returns a Promise that resolves when all the input Promises have resolved, or rejects if any of the input Promises reject.

#### Test cases:
* promiseAll([delayedMessage(1000), delayedMessage(2000), delayedMessage(500)]) resolves with ['Message after 1 second', 'Message after 2 seconds', 'Message after 0.5 seconds']
* promiseAll([delayedMessage(1000), rejectAfterDelay(2000), delayedMessage(500)]) rejects with 'Error after 2 seconds'
* promiseAll([]) resolves with []
* promiseAll([delayedMessage(500)]) resolves with ['Message after 0.5 seconds']
* promiseAll([rejectAfterDelay(1000)]) rejects with 'Error after 1 second'

### 5. Promise Race:

* Write a function that takes an array of Promises and returns a Promise that resolves or rejects as soon as one of the input Promises resolves or rejects.

#### Test cases:
* promiseRace([delayedMessage(1000), delayedMessage(2000), delayedMessage(500)]) resolves with 'Message after 0.5 seconds'
* promiseRace([delayedMessage(1000), rejectAfterDelay(2000), delayedMessage(500)]) rejects with 'Error after 2 seconds'
* promiseRace([]) resolves immediately
* promiseRace([delayedMessage(500)]) resolves with 'Message after 0.5 seconds'
* promiseRace([rejectAfterDelay(1000)]) rejects with 'Error after 1 second'

### 6. Promise Timeout:

* Write a function that takes a Promise and a timeout duration, and returns a Promise that resolves with the original Promise's result if it resolves within the timeout, or rejects with an error message if it exceeds the timeout.

#### Test cases:
* promiseWithTimeout(delayedMessage(1000), 2000) resolves with 'Message after 1 second'
* promiseWithTimeout(delayedMessage(2000), 1000) rejects with 'Promise timed out after 1000 milliseconds'
* promiseWithTimeout(rejectAfterDelay(1000), 2000) rejects with 'Error after 1 second'
* promiseWithTimeout(rejectAfterDelay(2000), 1000) rejects with 'Promise timed out after 1000 milliseconds'
* promiseWithTimeout(delayedMessage(500), 1000) resolves with 'Message after 0.5 seconds'

## Hard

### 7. Promise Retry:

* Write a function that takes a function that returns a Promise, a maximum number of retries, and a delay between retries. The function should repeatedly call the input function until it resolves successfully or the maximum number of retries is reached, with the given delay between retries.

#### Test cases:
* retryPromise(() => Promise.resolve('Success'), 3, 1000) resolves with 'Success'
* retryPromise(() => Promise.reject('Error'), 3, 1000) rejects with 'Error'
* retryPromise(() => Promise.resolve('Success'), 5, 500) resolves with 'Success'
* retryPromise(() => Promise.resolve('Success'), 3, 500) resolves with 'Success'
* retryPromise(() => Promise.reject('Error'), 2, 1000) rejects with 'Error'

### 8. Promise Progress:

* Write a function that returns a Promise which resolves after a certain delay with progress updates. It should periodically call a progress callback function with the current progress percentage.

#### Test cases:
* promiseWithProgress(3000, (progress) => console.log(progress)) resolves after 3 seconds, with progress updates logged every 500 milliseconds
* promiseWithProgress(2000, (progress) => console.log(progress)) resolves after 2 seconds, with progress updates logged every 500 milliseconds
* promiseWithProgress(1000, (progress) => console.log(progress)) resolves after 1 second, with progress updates logged every 500 milliseconds
* promiseWithProgress(500, (progress) => console.log(progress)) resolves after 0.5 seconds, with progress updates logged every 100 milliseconds
* promiseWithProgress(0, (progress) => console.log(progress)) resolves immediately, with progress updates logged immediately

### 9. Promise Parallel Limit:

* Write a function that takes an array of functions that return Promises and a limit on the maximum number of Promises that can be pending at once. It should execute the Promises in parallel, but no more than the specified limit at any given time.

#### Test cases:
* promiseParallelLimit([() => delayedMessage(1000), () => delayedMessage(2000), () => delayedMessage(500)], 2) resolves with ['Message after 1 second', 'Message after 2 seconds', 'Message after 0.5 seconds']
* promiseParallelLimit([() => delayedMessage(1000), () => rejectAfterDelay(2000), () => delayedMessage(500)], 2)rejects with'Error after 2 seconds' 
* promiseParallelLimit([], 2) resolves with[] 
* promiseParallelLimit([() => delayedMessage(500)], 1) resolves with['Message after 0.5 seconds'] 
* promiseParallelLimit([() => rejectAfterDelay(1000)], 2)rejects with'Error after 1 second'

### 10. Promise Waterfall:
* Write a function that takes an array of functions that return Promises. It should execute each Promise sequentially, passing the result of each Promise as the input to the next Promise in the array.

#### Test cases:
* promiseWaterfall([() => delayedMessage(1000), (msg) => delayedMessage(2000, msg.toUpperCase()), (msg) => delayedMessage(500, msg.split('').reverse().join(''))]) resolves with 'EGASSEM RETTIL AFTEROF ECAPSEMACS'
* promiseWaterfall([() => delayedMessage(1000), (msg) => delayedMessage(2000, msg.toUpperCase()), (msg) => rejectAfterDelay(500, msg.split('').reverse().join(''))]) rejects with 'Error after 500 milliseconds'
* promiseWaterfall([], 2) resolves with undefined
* promiseWaterfall([() => delayedMessage(500)], 1) resolves with 'Message after 0.5 seconds'
* promiseWaterfall([() => rejectAfterDelay(1000)], 2) rejects with 'Error after 1 second'