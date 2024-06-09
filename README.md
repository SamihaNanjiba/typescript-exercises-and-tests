# Basic JavaScript/TypeScript practice problems by common topics

This repository was initially created for me to review and/or practice basic JavaScript/TypeScript concepts and built-in functionalities such as `map`, `filter`, `reduce`, etc. However, along the way I realized this could be a valuable resource for others as well. Therefore, I decided to organize it in a way that others can use it as well if they desire. It contains sample exercises and my solutions and tests written for those problems.

## Who is it for?

These exercises are suitable for someone new to JavaScript/TypeScript and/or unit testing and wants to improve or review their skills.

## Purpose

The main purpose of this repository is to practice basic JavaScript and/or TypeScript topics in a TDD (Test Driven Development) approach. It contains sample problems in 10 different categories.

The problems are generated with the help of ChatGPT, however, their solutions and the tests are entirely written by me.

## Topic Categories
1. Arrays
2. Strings
3. Functions
4. Objects
5. Promises
6. Asynchronous Programming
7. Classes
8. Event Handling
9. Modules
10. DOM Manipulation

## Directory Structure

* [problems/](./problems/): This folder contains the markdown files for each category of exercises. Each markdown file should include the exercises and some example test cases for that specific category.
* [exercises/](./exercises/): The exercises folder contains the starter `.ts` files for the exercises.
* [src/](./src/): This folder should contain the folders `solutions/` and `tests/`. 
  * [solutions/](./src/solutions/): The `solutions/` folder should contain the TypeScript implemention of the exercises. The file names match the corresponding `.ts` exercise and markdown files in the `exercises/` and `problems/` folder respectively. For this repository, this folder already contains my solutions written by me.
  * [tests/](./src/tests/): This folder contains test files for each category of exercises. Each test file should correspond to the solved exercises in the `solutions/` folder.
* `jest.config.js`: Configuration file for Jest.
* `tsconfig.json:` Configuration file for TypeScript.
* `eslint.config.mjs`: Configuration file for ESLint.

## Setup
### Prerequisites

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Fork the repository:**

   If you would like to use this repository to write your own solutions, then please **Fork** this repo. Otherwise,
  
   Go to the [repository page](https://github.com/SamihaNanjiba/typescript-exercises-and-tests) and click the "Fork" button in the top-right corner of the page.

2. **Clone the repository:**

   HTTPS

   ```bash
   git clone https://github.com/SamihaNanjiba/typescript-exercises-and-tests.git
   ```

   SSH
   ```bash
   git@github.com:SamihaNanjiba/typescript-exercises-and-tests.git
   ```
   Change directory to the project folder:
   ```bash
   cd typescript-exercises-and-tests
   ```

2. Install dependencies:

   Using npm:
   ```bash
   npm install
   ```

## How to Use

### Solutions
I have already created starter files in the `exercises/` folder. You can start writing your implementations in them. In that case, change the refence of the test files to that folder. For example, instead of `import { findMax, removeDuplicates, reverseArray } from "../solutions/1_arrays.ts";`, change it to `import { findMax, removeDuplicates, reverseArray } from "../exercises/1_arrays.ts";`.

Another option will be to entirely remove my solutions from the solutions folder and copy the starter files there and start implementing. In that case, no need to change the `import` statements in the test files.

### Tests
This repository is setup with `Jest`, but feel free to remove it and use your own prefered framework, e.g. `Mocha` for writing unit tests.