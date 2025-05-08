# 90deg

90deg is an OISC (one instruction set computer) based on perpendicular vectors, vector dot product, and vector addition.

## Basics

Start off with an nD vector (3D in this case) s(a, b, c) as the original state. Each 90deg command takes up 2n parameters (6 in this case), with the first n params being the coordinates of the a vector, and the next n params being the coordinates of the b vector. Calculate dot product of s and a, if it is 0 (perpendicular), jump to the next command, otherwise add b to s and jump back to the start. It halts simply when all dot products are 0 (no commands can be run) or enter an infinite loop. Note that all values are unbounded signed integers.

For example, here is how to calculate 3+2:

```
s = (3, 2, 0)

(1, 0, 0) (-1, 0, 1)
(0, 1, 0) (0, -1, 1)
```

Steps:
```
s = (2, 2, 1)
s = (1, 2, 2)
s = (0, 2, 3)
s = (0, 1, 4)
s = (0, 0, 5)
```

## Turing completeness

This should behave like Fractran or section 14.2 Minsky machine, though I have not written a concrete proof for its turing completeness.

## VM

This repo also comes with a 90deg vm/interpreter in `90deg.js`. To use it, create another JS file:

```js
const vm = require("./90deg");
// or const vm = require("90deg") if you are using it in another package.

vm.run(
    // s vector
    [ 3n, 2n, 0n ],
    // code
    [
        1n, 0n, 0n, -1n, 0n, 1n,
        0n, 1n, 0n, 0n, -1n, 1n
    ],
    // log after one iteration (not one command), default is true
    true
);
```

To make it nD, you can simply increase the dimension of the s vector and the VM will adapt.

## Copyrights and License

Copyrights © 2025 Nguyen Phu Minh.

This project is licensed under the GPL 3.0 License.
