function run(s, code, log = true) {
    const dimensions = s.length;

    if (code.length % (dimensions*2+1) !== 0) throw new Error("Not enough parameters");

    let pc = 0;

    while (pc < code.length) {
        // Calculate dot product
        let dotProd = 0n;
        
        for (let i = 0; i < dimensions; i++) {
            dotProd += code[i+pc] * s[i];
        }

        // Condition
        if (dotProd !== 0n) {
            for (let i = 0; i < dimensions; i++) {
                s[i] += code[i+pc+dimensions];
            }

            // Loop back
            pc = parseInt(code[pc+dimensions*2]) * (dimensions*2+1);

            if (log) {
                console.log(`s = (${s.toString()})`);
            }
        } else {
            pc += dimensions*2+1;
        }
    }
}

module.exports = { run };
