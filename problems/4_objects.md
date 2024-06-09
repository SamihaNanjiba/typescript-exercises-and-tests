# 4. Objects

## Easy

### 1. Shallow Clone:

* Write a function that takes an object and returns a shallow clone of it.

#### Test cases:
* shallowClone({a: 1, b: 2}) -> {a: 1, b: 2}
* shallowClone({}) -> {}
* shallowClone({name: 'Alice', age: 25}) -> {name: 'Alice', age: 25}
* shallowClone({x: 1, y: 2, z: 3}) -> {x: 1, y: 2, z: 3}
* shallowClone({a: {b: 2}}) -> {a: {b: 2}}

### 2. Merge Objects:

* Write a function that takes two objects and merges them into a new object.

#### Test cases:
* mergeObjects({a: 1}, {b: 2}) -> {a: 1, b: 2}
* mergeObjects({a: 1}, {a: 2}) -> {a: 2}
* mergeObjects({}, {b: 2}) -> {b: 2}
* mergeObjects({x: 1}, {}) -> {x: 1}
* mergeObjects({name: 'Alice'}, {age: 25}) -> {name: 'Alice', age: 25}

### 3. Object Keys and Values:

* Write a function that takes an object and returns an array of its keys and an array of its values.

#### Test cases:
* keysAndValues({a: 1, b: 2}) -> [['a', 'b'], [1, 2]]
* keysAndValues({}) -> [[], []]
* keysAndValues({name: 'Alice', age: 25}) -> [['name', 'age'], ['Alice', 25]]
* keysAndValues({x: 1, y: 2, z: 3}) -> [['x', 'y', 'z'], [1, 2, 3]]
* keysAndValues({a: {b: 2}}) -> [['a'], [{b: 2}]]

## Medium

### 4. Deep Clone:

* Write a function that takes an object and returns a deep clone of it.

#### Test cases:
* deepClone({a: 1, b: 2}) -> {a: 1, b: 2}
* deepClone({a: {b: 2}}) -> {a: {b: 2}}
* deepClone({x: [1, 2, 3]}) -> {x: [1, 2, 3]}
* deepClone({name: 'Alice', details: {age: 25}}) -> {name: 'Alice', details: {age: 25}}
* deepClone({}) -> {}

### 5. Object Invert:

* Write a function that takes an object and returns a new object with the keys and values inverted.

#### Test cases:
* invert({a: 1, b: 2}) -> {1: 'a', 2: 'b'}
* invert({name: 'Alice', age: 25}) -> {'Alice': 'name', 25: 'age'}
* invert({x: 1, y: 2, z: 3}) -> {1: 'x', 2: 'y', 3: 'z'}
* invert({a: {b: 2}}) -> {[object Object]: 'a'}
* invert({}) -> {}

### 6. Filter Object:

* Write a function that takes an object and a predicate function, and returns a new object containing only the key-value pairs that satisfy the predicate.

#### Test cases:
* filterObject({a: 1, b: 2, c: 3}, x => x > 1) -> {b: 2, c: 3}
* filterObject({name: 'Alice', age: 25}, x => typeof x === 'string') -> {name: 'Alice'}
* filterObject({x: 1, y: 2, z: 3}, x => x < 3) -> {x: 1, y: 2}
* filterObject({a: 1, b: 2}, x => x > 2) -> {}
* filterObject({}, x => x) -> {}

### 7. Object Map:

* Write a function that takes an object and a mapping function, and returns a new object with the same keys but with values transformed by the mapping function.

#### Test cases:
* mapObject({a: 1, b: 2, c: 3}, x => x * 2) -> {a: 2, b: 4, c: 6}
* mapObject({name: 'Alice', age: 25}, x => typeof x === 'string' ? x.toUpperCase() : x) -> {name: 'ALICE', age: 25}
* mapObject({x: 1, y: 2, z: 3}, x => x + 1) -> {x: 2, y: 3, z: 4}
* mapObject({a: 'a', b: 'b'}, x => x + '!') -> {a: 'a!', b: 'b!'}
* mapObject({}, x => x) -> {}

## Hard

### 8. Merge Deep Objects:

* Write a function that takes two objects and deeply merges them into a new object.

#### Test cases:
* mergeDeep({a: 1, b: {c: 2}}, {b: {d: 3}}) -> {a: 1, b: {c: 2, d: 3}}
* mergeDeep({x: [1, 2]}, {x: [3, 4]}) -> {x: [3, 4]}
* mergeDeep({name: 'Alice'}, {details: {age: 25}}) -> {name: 'Alice', details: {age: 25}}
* mergeDeep({a: {b: 2}}, {a: {c: 3}}) -> {a: {b: 2, c: 3}}
* mergeDeep({}, {}) -> {}

### 9. Object Difference:

* Write a function that takes two objects and returns an object with the differences between them.

#### Test cases:
* difference({a: 1, b: 2}, {a: 1, b: 3}) -> {b: [2, 3]}
* difference({a: 1, b: 2, c: 3}, {a: 1, c: 3}) -> {b: [2, undefined]}
* difference({name: 'Alice', age: 25}, {name: 'Bob', age: 25}) -> {name: ['Alice', 'Bob']}
* difference({x: [1, 2]}, {x: [1, 2, 3]}) -> {x: [[1, 2], [1, 2, 3]]}
* difference({}, {a: 1}) -> {a: [undefined, 1]}

### 10. Flatten Object:

* Write a function that takes a nested object and returns a new object with flattened keys.

#### Test cases:
* flatten({a: 1, b: {c: 2, d: 3}}) -> {a: 1, 'b.c': 2, 'b.d': 3}
* flatten({x: {y: {z: 1}}}) -> {'x.y.z': 1}
* flatten({name: 'Alice', details: {age: 25, address: {city: 'Wonderland'}}}) -> {name: 'Alice', 'details.age': 25, 'details.address.city': 'Wonderland'}
* flatten({}) -> {}
* flatten({a: {b: {c: {d: 1}}}}) -> {'a.b.c.d': 1}