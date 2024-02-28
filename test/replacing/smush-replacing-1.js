import { deepEqual, equal, notEqual } from "assert";
import smush from "../../lib/index.js";

describe("Replacing Properties", function() {
    it("should replace the single property and it's value from the second object to the first", function() {
        function testItem(value) {
            const obj1 = {
                foo: "bar",
                apple: 20,
            };
            const obj2 = {
                foo: value
            };
    
            const smushed = smush(obj1, obj2);
    
            const manualSmush = {
                ...obj1,
                ...obj2
            }
    
            deepEqual(smushed, manualSmush);
            notEqual(smushed["foo"], obj1["foo"]);
            equal(smushed["foo"], obj2["foo"]);
        }

        testItem("biz");
        testItem(300);
        testItem(false);
        testItem(new Date());
        testItem(Symbol("me!"));
    });
});