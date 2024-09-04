/* Опис ДЗ: Напишіть регулярний вираз, який знайде послідовність з шести або більше символів, які не містять літери «А» 
(великої або малої)
Приклад виконання:
Повинен знаходити: Wonderful, Joyful
Не повинен знаходити: Happiness, Time, Task, Apple */

let examples = ["Happiness", "Wonderful", "Time", "Task", "Joyful", "Apple"]
let result = [];
let regExp = /\b[^Aa]{6,}\b/g;

for (let i = 0; i < examples.length; i++) {
    if(examples[i].match(regExp)) {
        result.push(examples[i])
    }
}
console.log(result);