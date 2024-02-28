import smush from "../lib/index.js";

const DEFAULT_OPTIONS = {
    name: "Default Name",
    path: "./path/to/file.txt",
    data: {
        apple: 1,
        banana: 20
    }
}

function buildOptions(options) {
    return smush(DEFAULT_OPTIONS, options);
}

const MY_OPTIONS = buildOptions({
    path: "./my/special/dir/file.txt",
    data: {
        apple: 10,
        pear: 72
    }
});

console.log(MY_OPTIONS); // Output: { name: 'Default Name', path: './my/special/dir/file.txt', data: { apple: 10, banana: 20, pear: 72 } }
