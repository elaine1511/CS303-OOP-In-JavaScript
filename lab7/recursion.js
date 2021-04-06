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
// console.log(sumNum(9));

/*
Question 2: - use recursion to implement print() method
Use Object literal to create an object named linkedlist which has the following methods:
let linkedlist = {}; // you need to implement code between the two braces, and make sure you can call methods as below
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print(); //in the console, you should see: LinkedList{1, 2,3}
linkedlist.remove(2);
linkedlist.print() //in the console, you should see: LinkedList{1,3}
*/
let linkedlist = {};

linkedlist.add = function (element) {
    if (this.value === undefined) {
        this.value = element;
        this.next = null;
    } else {
        let current = this;
        while (current.next) {
            current = current.next;
        }
        current.next = { value: element, next: null };
    }
};

linkedlist.remove = function (element) {
    var current = this;
    var prev = null;
    while (current) {
        if (current.value === element) {
            if (prev == null) {
                this.value = current.next.value; this.next = current.next.next;
            } else {
                prev.next = current.next;
            }
            return true;
        }
        prev = current;
        current = current.next;
    }
    return false;
};

linkedlist.printHelper = function (list, result) {
    if (list.next == null) {
        result += list.value;
        return result;
    }
    result += list.value + ',';
    return this.printHelper(list.next, result);
};

linkedlist.print = function () {
    let result = 'LinkedList{';
    result = this.printHelper(this, result); result += '}';
    console.log(result);
};

linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print(); //in the console, you should see: LinkedList{1,2,3} 
linkedlist.remove(3);
linkedlist.print(); //in the console, you should see: LinkedList{1,3}

