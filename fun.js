console.log("Hey!");

// you define variables with let, a variable name and then a value
let foo = 2;
console.log(foo);

// you can define the value of a variable after you declare the the variable exists!
let bar;
console.log("Bar is: " + bar); // should be undefined

bar =3;
console.log("Bar is now: " + bar); // should be 3


// let's try multiplying
console.log(foo + '*' + bar + '=' +(foo*bar));

// now you do division!
console.log(foo + '/' + bar + '=' +(foo/bar));




function squareNumber(number){ // square a number
    return Math.pow(number,2); // return is what the function ends up being
}

squareNumber(foo);
console.log(squareNumber(bar)); // should be 9

function printSquareNumber(number){ // calls square number and prints the results
    console.log(squareNumber(number)); // no return necessary
}

printSquareNumber(13);
// call printSquareNumber

function cubeNumber(number){
    return Math.pow(number,3);
}

console.log(cubeNumber(bar));

function printCubeNumber(number){
    console.log(cubeNumber(number));
}

printCubeNumber(7);


