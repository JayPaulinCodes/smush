import { deepEqual, equal, notEqual } from "assert";
import smush from "../../lib/index.js";

describe("Replacing Properties", function() {
    it("should replace the multiple properties and their values from the second object to the first", function() {
        const obj1 = {
            foo: "bar",
            apple: 20,
            banana: 304,
            pineapple: 2,
            strawberry: "bar",
        };
        const obj2 = {
            banana: 1,
            pineapple: 765,
            strawberry: false,
        };

        const smushed = smush(obj1, obj2);

        const manualSmush = {
            ...obj1,
            ...obj2
        }

        deepEqual(smushed, manualSmush);
        notEqual(smushed["banana"], obj1["banana"]);
        notEqual(smushed["pineapple"], obj1["pineapple"]);
        notEqual(smushed["strawberry"], obj1["strawberry"]);
        equal(smushed["banana"], obj2["banana"]);
        equal(smushed["pineapple"], obj2["pineapple"]);
        equal(smushed["strawberry"], obj2["strawberry"]);
    });
});