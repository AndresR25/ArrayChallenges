//AlwaysHungry

function alwaysHungry(arr) {
    var q = 0;
    for(var i=0; i<arr.length; i++) {
        if(arr[i] == "food") {
            console.log("yummy");
            q++;
        }
    }
    if(q == 0) {
        console.log("I'm hungry")
    }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);

alwaysHungry([4, 1, 5, 7, 2]);

//HighPass

function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i=0; i<arr.length; i++) {
        if(arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);


//BetterThanAverage

function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    for(var i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    var average = sum / arr.length;
    var count = 0
    // count how many values are greated than the average
    for(var i=0; i<arr.length; i++) {
        if(arr[i] > average) {
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);


//Array Reverse

function reverse(arr) {
    var max = 0;
    var min = arr.length - 1;
    while(max < min) {
        var temp = arr[max];
        arr[max] = arr[min];
        arr[min] = temp;
        max++;
        min--;
    }
    return arr;
} 
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); 

//Fibonacci Array

function fibonacciArray(n) {
    var fibArr = [0, 1];
    while(fibArr.length < n) {
        var previous = fibArr[fibArr.length-1];
        var pvp = fibArr[fibArr.length-2];
        fibArr.push(previous + pvp );
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result); 