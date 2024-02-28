import smush from "../lib/index.js";

function testDepth(depth, logSmushed = false) {
    let success = true;

    try {
        const obj1 = { foo: "fiz", jibber1: "jabber1", filler: { crap: true, shit: false } }
        const obj2 = { foo: "faz", jibberX1: "jabberX1", filler: { crap: false, shit: true } }
        
        for (let i = 0; i < depth; i++) {
            obj1["foo"] = { foo: "fiz-"+i, buz: obj1["foo"] };
            obj2["foo"] = { foo: "faz-"+i, buz: obj2["foo"] };
        }

        const smushed = smush(obj1, obj2);
        if (logSmushed) console.log(smushed);
    } catch(err) {
        success = false;
    }

    return success;
}

let reachedMax = false;
let depth = 0;

do {
    const result = testDepth(depth++);
    console.log(`Depth: ${depth}\t${result}`);
    if (!result) reachedMax = true; 
} while (!reachedMax);

// Output:
// Depth: 1     true
// Depth: 2     true
// ...
// Depth: 6722  false