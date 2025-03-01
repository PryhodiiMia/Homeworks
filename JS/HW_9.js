// 1. Створити функцію hello1(), яка при визові буде вертати текст “Привіт JavaScript”.
const hello1 = function(){
    console.log("Привіт JavaScript");
}
hello1();
// 2. Напишіть функцію hello2(), яка при виклику буде приймати змінну name (наприклад, «Василь») і 
// виводити рядок (в нашому випадку «Привіт, Василь»).
const hello2 = function(name = 'Василь'){
    console.log(`Привіт, ${name}`);
}
hello2();
// 3. Напишіть функцію mul(n, m), яка приймає два аргументи і повертає добуток, суму і різницю цих аргументів. Перевірте її роботу.
const mul = function(n, m){
    console.log("Добуток:", n * m);
    console.log("Сума:", n + m);
    console.log("Різниця:", n - m);
}
mul(4, 5);
// 4. Напиши функцію myAverageScore , яка у якості аргументу отримує масив з оцінками, і виводить користувачу його середній результат у наступному форматі:
// Myaveragescore: A (якщо середня оцінка від 91 до 100)
// My average score: B (якщо середня оцінка від 81 до 90)
// My average score: C (якщо середня оцінка від 71 до 80)
// My average score: D (якщо середня оцінка від 70 і менше)
// Для перевірки:
// console.log(myAverageScore([100, 75, 81, 96]));
// console.log(myAverageScore([45, 63, 85, 70]));
// console.log(myAverageScore([77, 82, 60, 58]));
// console.log(myAverageScore([93, 99, 93, 96]));


// 1. Напиши функцію logItems(items) для перебора і логування массива
const logItems = function(items){
    for (let i=0; i<items.length; i += 1){
        console.log(items[i]);
    }
}
logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
  logItems([1, 2, 3, 4, 5]);
  logItems(['клавиатура', 'наушники', 'часы']);
// 2. Напиши скрипт пошуку логіна
//  - Якщо логіна немає, вивести повідомлення 'Користувач [логін] не знайдено.'
//  - Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдено.'

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'aj4xth3m4n';
let message = `Користувач ${loginToFind} не знайдено`;
for (const login of logins) {
    if (login === loginToFind) {
        message = `Користувач ${loginToFind} знайдено`;
        break;
    }
}
console.log(message);

// 3. Напиши функцию findSmallesNumber(numbers) пошуку самого маленького числа в масиві, при умові, що числа унікальні (не повторюються).
const findSmallesNumber = function(numbers){
    let smallesNumber = numbers[0];
    for(let i=1; i<numbers.length; i++){
        if(smallesNumber > numbers[i]){
            smallesNumber = numbers[i];
        }
    }
    return smallesNumber;
}
console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4

// 4. Напиши функцию changeCase(string) яка замінює регістр кожного символа в рядку на протилежний. Наприклад, 
// якщо рядок «JavaScript», то на виході повинно бути «jAVAsCRIPT».

const changeCase = function(string){

}
console.log(changeCase('qweRTY')); // QWErty
console.log(changeCase('mAnGo')); // MaNgO
console.log(changeCase('AjAx')); // aJaX
// 5. Напиши функцию slugify(string) яка отримує рядок і повертає URL-slug. Заголовок статті складається тільки з букв та пропусків

// console.log(slugify('Top 10 benefits of React framework'));//top-10-benefits-of-react-framework
// console.log(slugify('Azure Static Web Apps are Awesome'));
// console.log(slugify('Technical writing tips for non-native English speakers'));