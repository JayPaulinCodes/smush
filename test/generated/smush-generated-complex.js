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

function coinFlip() {
    return [ true, false ][Math.round(Math.random())];
}

describe("Generated Tests - Complex Objects", function() {
    for (let i = 1; i <= TOTAL_ITERATIONS; i++) {
        it("complex object generated smush #"+i, function() {
            const TEST_ITEMS = {}

            const funcTree = {
                name: {
                    first: faker.person.firstName,
                    middle: faker.person.middleName,
                    last: faker.person.lastName
                },
                gender: faker.person.gender,
                bio: faker.person.bio,
                phoneNumber: faker.phone.number,
                job: {
                    area: faker.person.jobArea,
                    descriptor: faker.person.jobDescriptor,
                    title: faker.person.jobTitle,
                    type: faker.person.jobType
                },
                vehicle: {
                    type: faker.vehicle.type,
                    make: faker.vehicle.manufacturer,
                    model: faker.vehicle.model,
                    plate: faker.vehicle.vrm,
                    vin: faker.vehicle.vin,
                    fuel: faker.vehicle.fuel,
                    colour: faker.vehicle.color
                }
            }

            const obj1 = {
                name: {
                    first: funcTree.name.first(),
                    middle: funcTree.name.middle(),
                    last: funcTree.name.last()
                },
                gender: funcTree.gender(),
                bio: funcTree.bio(),
                phoneNumber: funcTree.phoneNumber(),
                job: {
                    area: funcTree.job.area(),
                    descriptor: funcTree.job.descriptor(),
                    title: funcTree.job.title(),
                    type: funcTree.job.type()
                },
                vehicle: {
                    type: funcTree.vehicle.type(),
                    make: funcTree.vehicle.make(),
                    model: funcTree.vehicle.model(),
                    plate: funcTree.vehicle.plate(),
                    vin: funcTree.vehicle.vin(),
                    fuel: funcTree.vehicle.fuel(),
                    colour: funcTree.vehicle.colour()
                }
            }

            const obj2 = {}

            for (const key in funcTree) {
                const value = funcTree[key];
                
                if (typeof value !== typeof Function) {
                    for (const nestedKey in value) {
                        const nestedValue = value[nestedKey];
                        const shouldReplace = coinFlip();
    
                        if (shouldReplace) {
                            if (obj2[key] === undefined) obj2[key] = {};
                            obj2[key][nestedKey] = fakerGen(nestedValue, obj1[key][nestedKey]);
                        }

                        if (TEST_ITEMS[key] === undefined) TEST_ITEMS[key] = {};
                        TEST_ITEMS[key][nestedKey] = shouldReplace;
                    }
                } else {
                    const shouldReplace = coinFlip();
                    if (shouldReplace) {
                        obj2[key] = fakerGen(value, obj1[key]);
                    }

                    TEST_ITEMS[key] = shouldReplace;
                }
            }
    
            const smushed = smush(obj1, obj2);
    
            const manualSmush = {
                ...obj1,
                ...obj2,
                name: {
                    ...obj1.name,
                    ...obj2.name
                },
                job: {
                    ...obj1.job,
                    ...obj2.job
                },
                vehicle: {
                    ...obj1.vehicle,
                    ...obj2.vehicle
                }
            }

            deepEqual(smushed, manualSmush);

            for (const key in TEST_ITEMS) {
                const value = TEST_ITEMS[key];
            
                if (typeof value ===  "object") {
                    for (const nestedKey in value) {
                        const nestedValue = value[nestedKey];
                        if (nestedValue) {
                            notEqual(smushed[key][nestedKey], obj1[key][nestedKey]);
                            equal(smushed[key][nestedKey], obj2[key][nestedKey]);
                        } else {
                            equal(smushed[key][nestedKey], obj1[key][nestedKey]);
                        }
                    }
                } else {
                    if (value) {
                        notEqual(smushed[key], obj1[key]);
                        equal(smushed[key], obj2[key]);
                    } else {
                        equal(smushed[key], obj1[key]);
                    }
                }
            }
        });
    }
});