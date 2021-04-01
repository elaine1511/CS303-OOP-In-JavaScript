// Question 1: Sum all numbers till the given one
"use strict";

function sumNum(num) {
    if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    } else {
        return num + sumNum(num - 1);
    }
}
console.log(sumNum(9));

/*
Question 2: - use recursion to implement print() method
Use Object literal to create an object named linkedlist which has the following methods:
linkedlist.add(1)
linkedlist.remove(2) – remove the first one
linkedlist.print() – format: LinkedList{ 1, 2, 5, 7 }
*/
let linkedlist = {
    add: function (list) {
        return list;
    },
    remove: function (list) {

    },
    print: function (list) {
        console.log(list.value);
        if (list.next) {
            print(list.next);
        }
    }
};
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(5);
linkedlist.add(7);
console.log(linkedlist.print());

