//task_1
function getArguments() {
    return arguments.length;
}

console.log(getArguments(2, 3, 3, 4));

//task_2
function getStringArguments() {
    var count = 0;
    for (var i=0; i<arguments.length; i++) {
        if (typeof arguments[i] === 'string') {
            count++;
        }
    }
    return count;
}

console.log(getStringArguments('3242','sdfsd',3,4,'0',6,7,8,9,'dfsfds'));

//task_3
function getSumArguments() {
    var sum=0;
    for (var i = 0; i < arguments.length; i++) {
        sum+=arguments[i];
    }
    return sum;
}

console.log(getSumArguments(1,2,3,4,5,6,7));