//using recursion

function replicate(times, num) {
    if (times <= 0) return [];
    return [num].concat(replicate(times - 1, num));
}
console.log(replicate(3, 5));

//another solution using loop
function replicate1(times, num) {
    let result = [];
    if (times < 1) {
        return result;
    } else {
        for (let i = 0; i < times; i++) {
            result.push(num);
        };
        return result;
    };
}

console.log(replicate1(3, 5));
