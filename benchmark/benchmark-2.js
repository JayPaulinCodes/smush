import TEST_ITEMS from "./test-items.js";
import smush from "../lib/index.js";

TEST_ITEMS.forEach(elem => {
    console.time(elem.name);
    smush(elem.obj1, elem.obj2);
    console.timeEnd(elem.name);
});