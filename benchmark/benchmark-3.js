import { faker } from '@faker-js/faker';
import sysinfo from "systeminformation";
import smush from "../lib/index.js";

const TEST_ITEMS = [
    1,
    5,
    10,
    25,
    50,
    75,
    100,
    250,
    500,
    750,
    1000,
    2500,
    5000,
    7500,
    10000,
    25000,
    50000,
    75000,
    100000,
    250000,
    500000,
    750000,
    1000000,
    // 2500000,
    // 5000000,
    // 7500000,
    // 10000000
]

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

function runBenchmark(iterations = 1) {
    for (let i = 1; i <= iterations; i++) {
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
                }
            } else {
                const shouldReplace = coinFlip();
                if (shouldReplace) {
                    obj2[key] = fakerGen(value, obj1[key]);
                }
            }
        }

        const smushed = smush(obj1, obj2);
    }
}

(async () => {
    const RESULTS = [];
    
    TEST_ITEMS.forEach(elem => {
        console.log(`Started benchmark with ${elem} iterations`);
        const start = new Date();
        runBenchmark(elem);
        const end = new Date();
        RESULTS.push({
            name: "smush*" + elem,
            duration: (end - start) + "ms"
        });
        console.log(`Finished benchmark with ${elem} iterations after ${end - start}ms`);
    });
    
    const cpuData = await sysinfo.cpu();

    console.table(RESULTS);
    console.log(`CPU: ${cpuData.manufacturer} ${cpuData.model}`);
    console.log(`\tCores: ${cpuData.cores}`);
    console.log(`\t\tPhysical: ${cpuData.physicalCores}`);
    console.log(`\t\tEfficiency: ${cpuData.efficiencyCores ?? 0}`);
    console.log(`\t\tPerformance: ${cpuData.performanceCores ?? 0}`);
    console.log(`\tSpeed: ${cpuData.speed}`);
    console.log(`\t\tMin: ${cpuData.speedMin}`);
    console.log(`\t\tMax: ${cpuData.speedMax}`);
})();