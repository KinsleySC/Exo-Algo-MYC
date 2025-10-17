const input = "a3b2c4a1"

let decompressed = ""

for (let i = 0; i < input.length; i += 2) {
    let chars = input[i];
    let count = Number (input[i + 1])
    decompressed += chars.repeat(count);
}

const res = [
    decompressed,
]

console.log(res);