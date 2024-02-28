import TEST_ITEMS from "./test-items.js";
import smush from "../lib/index.js";

function getSpeed(obj1, obj2) {
    const start = new Date();
    smush(obj1, obj2);
    const end = new Date();
    return end - start;
}

const RESULTS = [];

TEST_ITEMS.forEach(elem => {
    const speed = getSpeed(elem.obj1, elem.obj2);
    RESULTS.push({
        name: elem.name,
        speed: speed + "ms"
    });
});

console.table(RESULTS);