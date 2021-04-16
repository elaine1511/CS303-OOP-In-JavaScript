/*
Write a JavaScript function "checkExam" that returns the grade number. The function
receives two arguments, two arrays:
- The first input array contains the correct answers to an exam
- The second input array is "answers" array and contains student's answers.
- Return the grade number for the array of answers, giving +4 for each
correct answer,-1 for each incorrect answer
-If the score < 0, return 0.
Example:
checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) →6
checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]) →7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) →16
checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]) →0
*/

function checkExam (arr1,arr2){
    let score=0;
    for (let i=0;i<arr1.length;i++){
        if(arr1[i]===arr2[i]){
            score+=4;
        } else if(arr2[i]===""){
            score+=0;
        } else {
            score-=1;   
        }
    }
    return score<0?0:score;
}
console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]));// →6
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]))// →7
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]))// →16
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]))// →0