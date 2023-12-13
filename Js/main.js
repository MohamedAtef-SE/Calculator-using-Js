//! Mohamed Atef - Calculator Task :) C42 

//^ creating varable to keep number and display it on screen until we push the value into the arr of numbers
var totalOfNum;


var sum = 0;


//^ Array Of each total number we want to operate with push it after clicked on any operator
var arrOfNums = [];

//^ Array Of each Operator keep it to make multi operation till we clicked on Equal operator
//^ and Adding '+' operator of beginning of arrOfOp to adding auto first number into var sum
//^ when i clicked on any operator for 1st time.
var arrOfOp = ['+'];



//^ Button NUMBER
function Numberclicked(num) {
    //& if totalOfNum clear add number except 0 else concatenate the number with other numbers as string
    if (totalOfNum == undefined) {
        if (num !== '0') {
            totalOfNum = num;
            //& than display totalOfNum on Screen
            document.getElementById('screen').innerHTML = totalOfNum;
        }

    }
    else {
        //& Add limiting 14 Digital number in the screen and limtid value too
        if (totalOfNum < 9999999999999 || totalOfNum == '.') {
            totalOfNum += num
            //& than display totalOfNum on Screen
            document.getElementById('screen').innerHTML = totalOfNum;
        }
    };
}


//^ Reset Button (c)
function btnReset() {
    totalOfNum = undefined;
    /*
     saved length of array in variable before starting pop() to ensure the loop will itirate 
     on all of elements because every itiration length of arr will decrement -1 and use this variable
     for loop
     */
    sizeOfArr = arrOfNums.length;
    for (var i = 0; i < sizeOfArr; i++) {
        arrOfNums.pop();
        arrOfOp.pop();
    }
    arrOfOp = ['+'];
    sum = 0;
    document.getElementById('screen').innerHTML = 0;
}


//^Operator Button Function
function usingOperator(op) {
    //& to ensure we don't push undefined value to array of numbers.
    if (totalOfNum != undefined) {
        //^ push the number in array after clicked on operator button.
        //^ save all numbers by ordered in array able us to make multi operations
        arrOfNums.push(Number(totalOfNum));
        //& clear totalOfNum for other numbers we need to operate with
        totalOfNum = undefined;
    }
    //^ Push the operator in array of operators with the same orderd with array of numbers and 
    //^ to be Ensure if the user clicked twice or to two differnt operator in the same operation
    //^ doesn't effect on array or to all operation 
    arrOfOp[arrOfNums.length] = op;
}

//^ Equal Operator Function
function opEqual() {
    if (totalOfNum != undefined)
        //^ to push last number on the screen into the arr because we not clicked on any operator after we write it
        arrOfNums.push(Number(totalOfNum));
    totalOfNum = undefined;
    for (var i = 0; i < arrOfNums.length; i++) {
        if (arrOfOp[i] == '+')
            sum += arrOfNums[i];
        else if (arrOfOp[i] == '-')
            sum -= arrOfNums[i];
        else if (arrOfOp[i] == '*')
            sum *= arrOfNums[i];
        else if (arrOfOp[i] == '/')
            sum /= arrOfNums[i];
    }
    //^ Display the Total Of Operation
    document.getElementById('screen').innerHTML = Number(sum);
    /*
     saved length of array in variable before starting pop() to ensure the loop will itirate 
     on all of elements because every itiration length of arr will decrement -1 and use this variable
     for loop
     */
    sizeOfArr = arrOfNums.length;
    for (var i = 0; i < sizeOfArr; i++) {
        arrOfNums.pop();
        arrOfOp.pop();
    }
    arrOfOp = ['+'];
}