import smush from "../lib/index.js";

const obj1 = {
    foo: "bar",
    buzz: {
        apple: 1,
        banana: 2,
    }
}

const obj2 = {
    foo: "fiz",
    buzz: {
        pear: 5
    }
}

console.log(smush(undefined, obj1)); // Expected Output: { foo: 'bar', buzz: { apple: 1, banana: 2 } }
console.log(smush(undefined, obj2)); // Expected Output: { foo: 'fiz', buzz: { pear: 5 } }
console.log(smush(obj1, obj2)); // Expected Output: { foo: 'fiz', buzz: { apple: 1, banana: 2, pear: 5 } }
console.log(smush(obj2, obj1)); // Expected Output: { foo: 'bar', buzz: { pear: 5, apple: 1, banana: 2 } }
