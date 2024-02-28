import { deepEqual, equal } from "assert";
import smush from "../../lib/index.js";

describe("Adding Properties", function() {
    it("should add the multiple deeply nested properties and their values from the second object to the first", function() {
        const obj1 = {
            name: "Todd",
            shopping: {
                location: "BigBoxStore",
                when: new Date(),
                cart: {
                    apple: 2.50,
                    banana: 0.59
                },
                experience: {
                    service: 10
                }
            }
        };
        const obj2 = {
            shopping: {
                cart: {
                    pineapple: 5.00,
                    pear: 1.50,
                },
                experience: {
                    stock: 2,
                    prices: 6
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
        equal(smushed["shopping"]["cart"]["pineapple"], obj2["shopping"]["cart"]["pineapple"]);
        equal(smushed["shopping"]["cart"]["pear"], obj2["shopping"]["cart"]["pear"]);
        equal(smushed["shopping"]["experience"]["stock"], obj2["shopping"]["experience"]["stock"]);
        equal(smushed["shopping"]["experience"]["prices"], obj2["shopping"]["experience"]["prices"]);
    });
});