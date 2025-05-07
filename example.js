const vm = require("./90deg");

vm.run(
    // s vector
    [ 3n, 2n, 4n, 0n ],
    // code
    [
        1n, 0n, 0n, 0n, -1n, 0n, 0n, 1n,
        0n, 1n, 0n, 0n, 0n, -1n, 0n, 1n,
        0n, 0n, 1n, 0n, 0n, 0n, -1n, 1n
    ]
);
