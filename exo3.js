function analazeProduct(products, minPrice) {
    let total = 0;
    let count = 0;
    let catCount = {};

    for (let i = 0; i < products.length; i++) {
        if (products[i].p > minPrice) {
            total += products[i].p;
            count++;
            let c =products[i].c;
            if (catCount[c]) {
                catCount[c] = catCount[c] + 1;
            } else {
                catCount[c] = 1;
            }
        }
    }
    if (count === 0) {
        console.log("No products found above the minimum price.")
        return;
    }
    let avg = total / count;
    let topCat = null;
    let maxCount = 0;
    for (let key in catCount) {
        if (catCount[key] > maxCount) {
            maxCount = catCount[key];
            topCat = key;
        }
    }
    console.log("Average price:", avg);
    console.log("Most frequent category:", topCat);
}

analazeProduct([
    { p: 50, c: "tech" },
    { p: 120, c: "clothes" },
    { p: 300, c: "tech" },
    { p: 90, c: "home" },
    { p: 500, c: "tech" },
], 100);
