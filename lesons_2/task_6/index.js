//function
(function (a) { console.log(a(function (b) { return b + b; })); })(function (c) { return c(2) * c(3); });
console.log('------------');
//-------------------

//function reformate code
(function (a) {
    console.log(a(function (b) {
        return b + b;
    }));
})(function (c) {
    return c(2) * c(3);
});

console.log('------------');
//-------------------

//PanKovskiy variant
var a = function (arg) {
    console.log(arg);
}

var b = function (arg) {
    return arg + arg;
}

var c = function (arg1, arg2) {
    return arg1 * arg2;
}

a(c(b(2),b(3)));
console.log('------------');
//-------------------

//Nvv variant
//--------------------
var b = function (b) {
    return b + b;
}

console.log(b(2) * b(3));

console.log('------------');
//-------------------

//boss variant

var f1 = function (a) {
    console.log(a(f3));
}

var f2 = function (c) {
    return c(2) * c(3);
};

var f3 = function (b) {
    return b + b;
};

console.log('----');

f1(f2);




