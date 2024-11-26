// Створіть змінну, що симулює вибір варіанта зі списку. Виводьте повідомлення 
// залежно від обраного варіанта: "Кава", "Чай" або "Сік". Використайте switch

let select = 'Кола';
switch (select) {
    case 'Кава':
        console.log("Ви обрали Каву.");
        break;
    case 'Чай':
        console.log("Ви обрали Чай.");
        break;
    case 'Сік':
        console.log("Ви обрали Сік.");
        break;

    default:
        console.log('Ви обрали інший напій.')
        break;
}

// Створіть змінну для зберігання введеного рядка, який може бути днем тижня. Якщо 
// це робочий день — виведіть повідомлення про робочий день, якщо вихідний — про вихідний.

let message;
const day = 'Сввекл';
switch (day) {
    case 'Понеділок':
    case 'Вівторок':
    case 'Середа':
    case 'Четвер':
    case 'П’ятниця':
        message = 'Це робочий день';
        break;
    case 'Субота':
    case 'Неділя':
        message = 'Це вихідний день';
        break;
    default:
        message = "Невідомий день тижня.";
        break;
}
console.log(message);

// Створіть змінну для зберігання номера місяця. За номером місяця визначайте пору року 
// і виводьте відповідне повідомлення.

let message2;
const month = 0;
switch (month) {
    case 12:
    case 1:
    case 2:
        message2 = 'Зима';
        break;
    case 3:
    case 4:
    case 5:
        message2 = 'Весна';
        break;
    case 6:
    case 7:
    case 8:
        message2 = 'Літо';
        break;
    case 9:
    case 10:
    case 11:
        message2 = 'Осінь';
        break;
    default:
        message2 = 'Такого місяця не існує';
        break;
}
console.log(message2);

// Створіть змінну для зберігання назви кольору. Виводьте повідомлення відповідно до вибраного 
// кольору: якщо "червоний" — "стоп", "зелений" — "йти", "жовтий" — "чекати".

let message3;
const color = 'жовтий';
switch (color) {
    case 'червоний':
        message3 = 'стоп';
        break;
    case 'зелений':
        message3 = 'йти';
        break;
    case 'жовтий':
        message3 = 'чекати';
        break;
    default:
        message3 = 'невідомий колір';
        break;
}
console.log(message3);

// Створіть змінні для зберігання двох чисел та оператора (як у списку select). Виконайте 
// відповідну операцію та виведіть результат. У випадку ділення на нуль — виведіть попередження.

let result;
const number1 = 23;
const number2 = 2;
const operator = '=';

switch (operator) {
    case '+':
        result = number1 + number2;
        break;
    case '-':
        result = number1 - number2;
        break;
    case '*':
        result = number1 * number2;
        break;
    case '/':
        if (number2 === 0) {
            result = 'Помилка: ділення на нуль!';
        } else {
            result = number1 / number2;
        }
        break;
    default:
        result = 'Невідомий оператор';
        break;
}
console.log(result);