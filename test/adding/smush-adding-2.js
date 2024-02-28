import { deepEqual, equal } from "assert";
import smush from "../../lib/index.js";

describe("Adding Properties", function() {
    it("should add the multiple properties and their values from the second object to the first", function() {
        const obj1 = {
            foo: "bar",
            apple: 20,
        };
        const obj2 = {
            banana: 304,
            pineapple: 2,
            strawberry: "bar",
        };

        const smushed = smush(obj1, obj2);

        const manualSmush = {
            ...obj1,
            ...obj2
        }

        deepEqual(smushed, manualSmush);
        equal(smushed["banana"], obj2["banana"]);
        equal(smushed["pineapple"], obj2["pineapple"]);
        equal(smushed["strawberry"], obj2["strawberry"]);
    });
});