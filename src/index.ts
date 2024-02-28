/**
 * # Smush
 * Takes 2 objects and smushes them together, using the properties of the second object
 * to override or add to the first object.
 * 
 * Designed to help with overriding defaults in a nested object, such as this example:
 * ```
 * const DEFAULT_OPTIONS = {
 *     name: "Default Name",
 *     path: "./path/to/file.txt",
 *     data: {
 *         apple: 1,
 *         banana: 20
 *     }
 * }
 * 
 * function buildOptions(options) {
 *     return smush(DEFAULT_OPTIONS, options);
 * }
 * 
 * const MY_OPTIONS = buildOptions({
 *     path: "./my/special/dir/file.txt",
 *     data: {
 *         apple: 10,
 *         pear: 72
 *     }
 * });
 * 
 * console.log(MY_OPTIONS); // Output: { name: 'Default Name', path: './my/special/dir/file.txt', data: { apple: 10, banana: 20, pear: 72 } }
 * ```
 * 
 * ### Examples
 * ```
 * const defaultObj = { foo: "bar" };
 * const obj = { foo: "fiz" };
 * console.log(smush(defaultObj, obj)); // Output: { foo: "fiz" }
 * ```
 * 
 * ### Note
 * Because recursion is used to make this happen, there is some limitations to object size, see examples/example-callStack.js
 * 
 * @param {Object | undefined} defaultObj The base object, whos properties are replaces / modified
 * @param {Object} obj The object to smush into the base object, which contains properties added / replaced on the base object
 * @returns {Object} Smushed object
 */
export default function smush(
    defaultObj: { [index: string | number | symbol]: any } | undefined = undefined,
    obj: { [index: string | number | symbol]: any }
): { [index: string | number | symbol]: any } {
    if (defaultObj === undefined) return obj;
    const newObj: { [index: string | number | symbol]: any } = { ...defaultObj };

    for (const key in obj) {
        const oldValue = defaultObj[key];
        const newValue = obj[key];
        const canGoDeeper = (newValue instanceof Object && !Array.isArray(newValue) && typeof newValue !== typeof Function) 
            && (oldValue instanceof Object && !Array.isArray(oldValue) && typeof oldValue !== typeof Function);
        newObj[key] = canGoDeeper ? smush(defaultObj[key], newValue) : newValue;
    }

    return newObj;
}