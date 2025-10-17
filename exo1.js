const input = "a3b2c4a1"
"a 3 b 2 c 4 a 1"

let decompressed = ""

for (let i = 0; i < input.length; i += 2) {
    let chars = input[i];
    let count = Number (input[i + 1])
    decompressed += chars.repeat(count);
}

let mostFrequent = {}

for (let i = 0; i < decompressed.length; i++) {
    let count = decompressed[i]
    if (decompressed[i]) {
        mostFrequent[count] = decompressed[i] + 1;
    } else {
        mostFrequent[count] = 1;
    }
}

const res = [
    decompressed,
    mostFrequent,
]

console.log(res);