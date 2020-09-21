function calculate(args) {
    let result;
    if (args.op === "+") {
        result = args.n1 + args.n2;
    } else if (args.op === "-") {
        result = args.n1 - args.n2;
    } else {
        result = "Not supported";
    }
    return result;
}
console.log("Way1: 7+8")
console.log(calculate({
    n1: 7,
    n2: 8,
    op: "+"
}));

var numbers = new Object();
numbers.n1 = 7;
numbers.n2 = 8;
numbers.op = "-";

console.log("Way2: 7-8")
console.log(calculate(numbers));
