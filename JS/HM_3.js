// Вивести result в консоль. Перевірити тип змінної result= 5+5+’5’.

const result = 5+5+'5';
console.log("Результат: ", result);
console.log("Тип змінної: ", typeof result);

// Створіть змінну email з вашою електронною адресою. Напишіть скрипт, 
// який перевіряє чи містить змінна email символ @ і рахує загальну кількість 
// символів. Результат виведіть в консоль.

const email = 'marii.mk116@gmail.com';
console.log("Емейл:", email);
console.log("Чи містить символ @: ", email.includes('@'));
console.log("Кількість символів в email:", email.length);

// Записати в окремих змінних кожне слово: My, name, is. Поєднати всі слова в 
// змінну fullName. До змінної fullName додати ‘Viktor’. fullName вивести в консоль.

const word1 = 'My';
const word2 = 'name';
const word3 = 'is';
const fullName = `${word1} ${word2} ${word3} Viktor.`;
console.log(fullName);

// Створіть змінну userName з ім’ям користувача і змінну payment з сумою до оплати. 
// За допомогою шаблонного рядка виведіть на екран через alert повідомлення на прикладі 
// цього: «Дякуємо, Олександро! До сплати 300 гривень»

const userName = 'Maria';
const payment = 5420;
alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);