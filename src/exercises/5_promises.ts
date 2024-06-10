// Write a function that returns a Promise. The Promise should resolve after a given delay with a message.
// export const delayedMessage = () => {}

// Write a function that returns a Promise which resolves to a string. Chain another Promise to it that adds a suffix to the resolved string.
// export const chainedPromise = () => {}

// Write a function that returns a Promise which rejects after a certain delay with an error message.
// export const rejectAfterDelay = () => {}

// Write a function that takes an array of Promises and returns a Promise that resolves when all the input Promises have resolved, or rejects if any of the input Promises reject.
// export const promiseAll = () => {}

// Write a function that takes an array of Promises and returns a Promise that resolves or rejects as soon as one of the input Promises resolves or rejects.
// export const promiseRace = () => {}

// Write a function that takes a Promise and a timeout duration, and returns a Promise that resolves with the original Promise's result if it resolves within the timeout, or rejects with an error message if it exceeds the timeout.
// export const promiseWithTimeout = () => {}

// Write a function that takes a function that returns a Promise, a maximum number of retries, and a delay between retries. The function should repeatedly call the input function until it resolves successfully or the maximum number of retries is reached, with the given delay between retries.
// export const retryPromise = () => {}

// Write a function that returns a Promise which resolves after a certain delay with progress updates. It should periodically call a progress callback function with the current progress percentage.
// export const promiseWithProgress = () => {}

// Write a function that takes an array of functions that return Promises and a limit on the maximum number of Promises that can be pending at once. It should execute the Promises in parallel, but no more than the specified limit at any given time.
// export const promiseParallelLimit = () => {}

// Write a function that takes an array of functions that return Promises. It should execute each Promise sequentially, passing the result of each Promise as the input to the next Promise in the array.
// export const promiseWaterfall = () => {}