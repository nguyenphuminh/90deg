# 90deg

90deg is an OISC (one instruction set computer) based on perpendicular vectors, vector dot product, and vector addition.

## Basics

Start off with an nD vector (3D in this case, and that should be enough already) s(a, b, c) as the original state. Each 90deg command takes up 2n+1 parameters (7 in this case), with the first n params being the coordinates of the a vector, the next n params being the coordinates of the b vector, and the last param being a number d. Calculate dot product of s and a, if it is 0 (perpendicular), jump to the next command, otherwise add b to s and jump to command d. It halts simply when all dot products are 0 (no commands can be run) or enter an infinite loop with some conditions. Note that all values are unbounded signed integers.

For example, here is how to calculate 3+2:

```
s = (3, 2, 0)

(1, 0, 0) (-1, 0, 1) 1
(0, 1, 0) (0, -1, 1) 0
```

State changes:
```
s = (2, 2, 1)
s = (1, 2, 2)
s = (0, 2, 3)
s = (0, 1, 4)
s = (0, 0, 5)
```

As we can see, the z coordinate is now 5 which is the result of 3+2.

## Turing completeness

### 2-counter machine

To prove that 90deg is turing complete, we can prove that it is able to simulate a 2-counter machine, which is turing complete.

A 2-counter machine consists of:
- Two unbounded integer registers.
- INC(x) command to increment the value of register x.
- DEC(x, i) command to decrement the value of register x if it is not zero and jump to command i, otherwise jump to the next command.

### 90deg as a 2-counter machine

A 3D vector s can already represent two registers with its coordinate x and y.

The DEC command can be implemented by calculating the dot product of vector s and vector a that has value 1 in the coordinate (register) we want to check and 0 in other coordinates. For example:
```
s(2, 1, 0) . a(1, 0, 0) = 2 * 1 + 0 + 0 = 2
s(3, 0, 2) . a(0, 1, 0) = 0 + 0 * 1 + 0 = 0
```

A 90deg command adds the vector b to the vector s and jumps to some command i if the dot product is not zero. If it is zero, s is not modified and the program jumps to the next command. Thus, we can recreate DEC by making b's coordinates negative.

The INC command can be simulated by forcing the z coordinate of s to always be non-zero. For instance, you can define s as (a, b, 1), then calculate dot product of s and a(0, 0, 1). The result would always be non-zero, then you can add b(m, n, 0) to s to increment whatever registers you like.

## The 90deg virtual machine

This repo also comes with a 90deg vm/interpreter in `90deg.js`. To use it, create another JS file:

```js
const vm = require("./90deg");

vm.run(
    // s vector
    [ 3n, 2n, 0n ],
    // code
    [
        1n, 0n, 0n, -1n, 0n, 1n, 0n,
        0n, 1n, 0n, 0n, -1n, 1n, 0n
    ],
    // log per state change, default is true
    true
);
```

To make it nD, you can simply increase the dimension (length) of the s vector (array) and the VM will adapt.

Note that `vm.run` directly mutates the s vector and returns a reference to it as well.

### NPM

You can use 90deg as an npm package. First, install:
```
npm install 90deg
```

Then import:
```js
const vm = require("90deg");
```

### CDN

Or just use 90deg in a browser:
```html
<script src="https://unpkg.com/90deg"></script>
```

## Examples

Example 90deg programs can be found in `./examples/`.

## Copyrights and License

Copyrights © 2025 Nguyen Phu Minh.

This project is licensed under the GPL 3.0 License.
