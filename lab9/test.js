function distint(arr) {
    let result = {};
    for (let item of arr) {
        if (result[item]) {
            result[item] += 1;
        } else {
            result[item] = 1;
        }
    }
    return result;
}

console.log(distint(['samon', 'samon', 'samon', 'samon', 'chicken', 'dog']));