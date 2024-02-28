import { deepEqual, equal } from "assert";
import smush from "../../lib/index.js";

describe("Adding Properties", function() {
    it("should add the single property and it's value from the second object to the first", function() {
        function testItem(key, value) {
            const obj1 = {
                foo: "bar",
                apple: 20,
            };
            const obj2 = {
                [key]: value
            };
    
            const smushed = smush(obj1, obj2);
    
            const manualSmush = {
                ...obj1,
                ...obj2
            }
    
            deepEqual(smushed, manualSmush);
            equal(smushed[key], obj2[key]);
        }

        testItem("fiz", "biz");
        testItem("banana", 300);
        testItem("alive", false);
        testItem("when", new Date());
        testItem("what", Symbol("me!"));
    });
});