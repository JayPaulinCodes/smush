import { deepEqual, equal, notEqual } from "assert";
import { faker } from '@faker-js/faker';
import smush from "../../lib/index.js";

const TOTAL_ITERATIONS = 100;

function fakerGen(func, notVal, options = undefined) {
    let result;

    do {
        result = func(options);
    } while (result == notVal || (Array.isArray(notVal) && notVal.includes(result)));

    return result;
}

describe("Generated Tests - Simple Objects", function() {
    for (let i = 1; i <= TOTAL_ITERATIONS; i++) {
        it("simple object generated smush #"+i, function() {
            const constantKey1 = faker.commerce.productName();
            const constantKey2 = faker.commerce.productName();
            const replacedKey1 = faker.commerce.productName();
            const replacedKey2 = faker.commerce.productName();
            const replacedKey3 = faker.commerce.productName();
            const generatedKey1 = faker.commerce.productName();
            const generatedKey2 = faker.commerce.productName();
            const generatedKey3 = fakerGen(faker.commerce.productName, [ generatedKey1, generatedKey2 ]);
            const generatedKey4 = fakerGen(faker.commerce.productName, [ generatedKey1, generatedKey2 ]);

            const obj1 = {
                [constantKey1]: faker.commerce.price(),
                [constantKey2]: faker.commerce.price(),
                [replacedKey1]: faker.commerce.price(),
                [replacedKey2]: faker.commerce.price(),
                [replacedKey3]: faker.commerce.price(),
                [generatedKey1]: faker.commerce.price(),
                [generatedKey2]: faker.commerce.price(),
            }

            const obj2 = {
                [replacedKey1]: fakerGen(faker.commerce.price, obj1[replacedKey1]),
                [replacedKey2]: fakerGen(faker.commerce.price, obj1[replacedKey2]),
                [replacedKey3]: fakerGen(faker.commerce.price, obj1[replacedKey3]),
                [generatedKey3]: faker.commerce.price(),
                [generatedKey4]: faker.commerce.price(),
            }
    
            const smushed = smush(obj1, obj2);
    
            const manualSmush = {
                ...obj1,
                ...obj2
            }
    
            deepEqual(smushed, manualSmush);

            notEqual(smushed[replacedKey1], obj1[replacedKey1]);
            notEqual(smushed[replacedKey2], obj1[replacedKey2]);
            notEqual(smushed[replacedKey3], obj1[replacedKey3]);
            
            equal(smushed[constantKey1], obj1[constantKey1]);
            equal(smushed[constantKey2], obj1[constantKey2]);
        });
    }
});