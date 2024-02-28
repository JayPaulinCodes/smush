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

describe("Generated Tests - Simple Nested Object", function() {
    for (let i = 1; i <= TOTAL_ITERATIONS; i++) {
        it("single nested object generated smush #"+i, function() {
            const generatedName = faker.person.fullName();
            const generatedGender = faker.person.gender();

            const obj1 = {
                name: generatedName,
                gender: generatedGender,
                job: {
                    area: faker.person.jobArea(),
                    descriptor: faker.person.jobDescriptor(),
                    title: faker.person.jobTitle(),
                    type: faker.person.jobType()
                }
            }

            const obj2 = {
                job: {
                    area: fakerGen(faker.person.jobArea, obj1.job.area),
                    descriptor: fakerGen(faker.person.jobDescriptor, obj1.job.descriptor),
                    title: fakerGen(faker.person.jobTitle, obj1.job.title),
                    type: fakerGen(faker.person.jobType, obj1.job.type)
                }
            }
    
            const smushed = smush(obj1, obj2);
    
            const manualSmush = {
                ...obj1,
                ...obj2,
                job: {
                    ...obj1.job,
                    ...obj2.job
                }
            }

            deepEqual(smushed, manualSmush);

            notEqual(smushed.job.area, obj1.job.area);
            notEqual(smushed.job.descriptor, obj1.job.descriptor);
            notEqual(smushed.job.title, obj1.job.title);
            notEqual(smushed.job.type, obj1.job.type);
            
            equal(smushed.name, obj1.name);
            equal(smushed.gender, obj1.gender);
        });
    }
});