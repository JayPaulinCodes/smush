import { deepEqual, equal } from "assert";
import smush from "../../lib/index.js";

describe("Adding Properties", function() {
    it("should add the single nested property and it's value from the second object to the first", function() {
        const obj1 = {
            name: "Todd",
            cart: {
                apple: 2.50,
                banana: 0.59
            }
        };
        const obj2 = {
            cart: {
                pineapple: 5.00
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
        equal(smushed["cart"]["pineapple"], obj2["cart"]["pineapple"]);
    });
});