/*
Use class syntax to create a new class named Stack. 
It has the following methods:
1. push(value): when call this method, it'll add the value into the Stack.
2. pop(): this method removes the last added in element from the Stack.
3. toString(): return a String which contains all the elements in the Stack in certain format: Stack{ each element separated with comma}

Here is examples of using the Stack class.

You're allowed to use Array APIs to do this question.
*/

class Stack {
    constructor(){
        this.arr=[];
    }
    push(value){
        return this.arr.push(value);
    }
    pop(value){
        return this.arr.pop(value);
    }
    toString(){
        return "Stack { " + this.arr.join(",")+" }";
    }
}
const s = new Stack();
s.push(1);  //add 1 in the stack
s.push(2); //add 2 in the stack
s.pop(); // remove 2 from the stack since 2 is the last element being added in the stack
s.push(3); //add 3 in the stack
console.log(s.toString()); //Expected Result: Stack {1,3}