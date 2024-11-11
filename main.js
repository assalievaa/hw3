function min(num1, num2) {
    if (num1 < num2) {
        console.log(num1);
    } else {
        console.log(num2);
    }
}

min(7, 12);

const userText = prompt("Введите ваш текст:");
console.log(userText.length);

const myCalculator = (num1, num2, operator) => {
    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else if (operator === "/") {
        if (num2 === 0) {
            return
        }
        return num1 / num2;
    } else {
        return
    }
};

console.log(myCalculator(10, 5, "+"));
console.log(myCalculator(10, 5, "-"));
console.log(myCalculator(10, 5, "*"));
console.log(myCalculator(10, 5, "/"));
console.log(myCalculator(10, 0, "/"));







