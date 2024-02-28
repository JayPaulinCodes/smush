import { deepEqual, equal, notEqual } from "assert";
import smush from "../../lib/index.js";

describe("Replacing Properties", function() {
    it("should replace the multiple deeply nested properties and their values from the second object to the first", function() {
        const obj1 = {
            name: "Todd",
            shopping: {
                location: "BigBoxStore",
                when: new Date(),
                cart: {
                    apple: 2.50,
                    banana: 0.59,
                    pineapple: 5.00,
                    pear: 1.50,
                },
                experience: {
                    service: 10,
                    stock: 2,
                    prices: 6
                }
            }
        };
        const obj2 = {
            shopping: {
                cart: {
                    pineapple: 51.00,
                    pear: 12.50,
                },
                experience: {
                    stock: 7,
                    prices: 2
                }
            }
        };

        const smushed = smush(obj1, obj2);

        const manualSmush = {
            ...obj1,
            ...obj2,
            shopping: {
                ...obj1.shopping,
                ...obj2.shopping,
                cart: {
                    ...obj1.shopping.cart,
                    ...obj2.shopping.cart
                },
                experience: {
                    ...obj1.shopping.experience,
                    ...obj2.shopping.experience
                }
            }
        }

        deepEqual(smushed, manualSmush);
        notEqual(smushed["shopping"]["cart"]["pineapple"], obj1["shopping"]["cart"]["pineapple"]);
        notEqual(smushed["shopping"]["cart"]["pear"], obj1["shopping"]["cart"]["pear"]);
        notEqual(smushed["shopping"]["experience"]["stock"], obj1["shopping"]["experience"]["stock"]);
        notEqual(smushed["shopping"]["experience"]["prices"], obj1["shopping"]["experience"]["prices"]);
        equal(smushed["shopping"]["cart"]["pineapple"], obj2["shopping"]["cart"]["pineapple"]);
        equal(smushed["shopping"]["cart"]["pear"], obj2["shopping"]["cart"]["pear"]);
        equal(smushed["shopping"]["experience"]["stock"], obj2["shopping"]["experience"]["stock"]);
        equal(smushed["shopping"]["experience"]["prices"], obj2["shopping"]["experience"]["prices"]);
    });
});