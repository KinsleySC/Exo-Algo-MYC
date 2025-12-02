const input = "a3b2c4a1"
"a 3 b 2 c 4 a 1"

let decompressed = ""

for (let i = 0; i < input.length; i += 2) {
    let chars = input[i];
    let count = Number (input[i + 1])
    decompressed += chars.repeat(count);
}

let freq = {};

for (let char of decompressed) {
    if (freq[char]) {
        freq[char] += 1;
    } else {
        freq[char] = 1;
    }
}

let mostFrequent = "";
let maxCount = 0;
let uniqueChars = 0;

for (let letter in freq) {
    if (freq[letter] > maxCount) {
        maxCount = freq[letter];
        mostFrequent = letter;
    }
    uniqueChars += 1;
}

const res = [
    decompressed,
    mostFrequent,
    uniqueChars
]

console.log(res);
