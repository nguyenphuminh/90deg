const vm = require("../90deg");

vm.run(
    // Set s = (a,a)
    // If result is (0,0), it is even, otherwise it is odd
    [ 19n, 19n ],
    [
        1n, 0n, -2n, 0n, 1n,
        0n, 1n, 0n, -1n, 0n
    ]
);
