import { deepEqual, equal, notEqual } from "assert";
import smush from "../../lib/index.js";

describe("Replacing Properties", function() {
    it("should replace the multiple nested properties and their values from the second object to the first", function() {
        const obj1 = {
            name: "Todd",
            cart: {
                apple: 2.50,
                banana: 0.59
            }
        };
        const obj2 = {
            cart: {
                apple: 3.99,
                banana: 0.69
            }
        };

        const smushed = smush(obj1, obj2);

        const manualSmush = {
            ...obj1,
            ...obj2,
            cart: {
                ...obj1.cart,
                ...obj2.cart
            }
        }

        deepEqual(smushed, manualSmush);
        notEqual(smushed["cart"]["apple"], obj1["cart"]["apple"]);
        notEqual(smushed["cart"]["banana"], obj1["cart"]["banana"]);
        equal(smushed["cart"]["apple"], obj2["cart"]["apple"]);
        equal(smushed["cart"]["banana"], obj2["cart"]["banana"]);
    });
});