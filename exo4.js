function showTopUser(users, minScore) {
    let bestUser = null;
    let bestScore = 0;

    for (let i = 0; i < users.length; i++) {
        let sum = 0;
        let scores = users[i].scores;
        for (let j = 0; j < scores.length; j++) {
            if (scores[j] >= minScore) {
                sum += scores[j];
            }
        }
        if (sum > bestScore) {
            bestScore = sum;
            bestUser = users[i].name;
        }
    }
    console.log("Top user:", bestUser)
}

showTopUser([
    { name: "alice", scores: [10, 20, 5, 40] },
    { name: "bob", scores: [5, 5, 5, 5] },
    { name: "charlie", scores: [50, 10, 30] }
], 10);
