const a = parseFloat(prompt('Введіть число A'));
const b = parseFloat(prompt('Введіть число B'));
const c = parseFloat(prompt('Введіть число C'));
const d = calcDiscr(a, b, c);

function calcDiscr(a, b, c) {
    return b * b - 4 * a * c;
}

function solveQuadr(a, b, c) {
    if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c)) {
        return "Потрібно вводити числа";
    }
    if (d < 0) {
        return "Це рівняння не має розв'язання";
    }
    else if (d === 0) {
        return "Розв'язок: " + "x=" + (-b / 2) * a;
    }
    else {
        return "Розв'язок: " + "x1=" + (-b + Math.sqrt(d)) / (2 * a) + "; x2=" + (-b - Math.sqrt(d)) / (2 * a);
    }
}

alert(solveQuadr(a, b, c));