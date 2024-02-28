# Smush
A simple function to make merging objects together a bit easier, because why not!

### Installing
```bash
npm i @devjacob/smush
```

### Examples
```js
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
```

```js
import smush from "../lib/index.js";

const obj1 = {
    foo: "bar",
    buzz: {
        apple: 1,
        banana: 2,
    }
}

const obj2 = {
    foo: "fiz",
    buzz: {
        pear: 5
    }
}

console.log(smush(undefined, obj1)); // Expected Output: { foo: 'bar', buzz: { apple: 1, banana: 2 } }
console.log(smush(undefined, obj2)); // Expected Output: { foo: 'fiz', buzz: { pear: 5 } }
console.log(smush(obj1, obj2)); // Expected Output: { foo: 'fiz', buzz: { apple: 1, banana: 2, pear: 5 } }
console.log(smush(obj2, obj1)); // Expected Output: { foo: 'bar', buzz: { pear: 5, apple: 1, banana: 2 } }
```

### Note
Because recursion is used to make this happen, there is some limitations to object size, see examples/example-callStack.js

# License
This project uses the **Mozilla Public License 2.0**
<br>
Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.
<br>
<br>
The license can be read [here](./LICENSE)
<br>
<br>
The following table provides a breif overview of the license. Hovering each point will provide a more detailed description.

[permissions1]: ## "The licensed material and derivatives may be used for commercial purposes."
[permissions2]: ## "The licensed material may be distributed."
[permissions3]: ## "The licensed material may be modified."
[permissions4]: ## "This license provides an express grant of patent rights from contributors."
[permissions5]: ## "The licensed material may be used and modified in private."

[conditions1]: ## "Source code must be made available when the licensed material is distributed."
[conditions2]: ## "A copy of the license and copyright notice must be included with the licensed material."
[conditions3]: ## "Modifications must be released under the same license when distributing the licensed material. In some cases a similar or related license may be used."

[limitations1]: ## "This license includes a limitation of liability."
[limitations2]: ## "This license explicitly states that it does NOT grant trademark rights, even though licenses without such a statement probably do not grant any implicit trademark rights."
[limitations3]: ## "This license explicitly states that it does NOT provide any warranty."

| Permissions | Conditions | Limitations |
|---|---|---|
| [<img src="./.github/assets/licenseSpriteGreen.png"> Commercial use][permissions1] <br> [<img src="./.github/assets/licenseSpriteGreen.png"> Distribution][permissions2] <br> [<img src="./.github/assets/licenseSpriteGreen.png"> Modification][permissions3] <br> [<img src="./.github/assets/licenseSpriteGreen.png"> Patent use][permissions4] <br> [<img src="./.github/assets/licenseSpriteGreen.png"> Private use][permissions5] | [<img src="./.github/assets/licenseSpriteBlue.png"> Disclose source][conditions1] <br> [<img src="./.github/assets/licenseSpriteBlue.png"> License and copyright notice][conditions3] <br> [<img src="./.github/assets/licenseSpriteBlue.png"> Same license (file)][conditions2] | [<img src="./.github/assets/licenseSpriteRed.png"> Liability][limitations1] <br> [<img src="./.github/assets/licenseSpriteRed.png"> Trademark use][limitations2] <br> [<img src="./.github/assets/licenseSpriteRed.png"> Warranty][limitations3] |