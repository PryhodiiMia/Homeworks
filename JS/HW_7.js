// Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.

const numbers = [1, 2, 3];
numbers[1] = 10;
console.log(numbers);

// Створити масив із трьох рядків. Додати до масиву ще одну рядків.

const clients = ["Maria", "Kostya", "Nastya"];
clients[3] = "Katya";
console.log(clients);

// Створити скрипт який поверне суму всіх чисел в масиві.

const numbers2 = [2, 4, 8, 10];
let total = 0;
for (let i = 0; i < numbers2.length; i += 1) {
  total += numbers2[i];
}
console.log("Сума чисел у масиві:", total);

// Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.

const numbers3 = [2, 4, 7, 8, 10];
for (const number of numbers3) {
  console.log(number);
}

// Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.

const names = ["Maria", "Kostya", "Nastya", "Katya", "Alla"];
for (const name of names) {
  if (name.length > 5) {
    console.log(name);
  }
}

// Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.

const numbers4 = [2, 5, 7, 8, 9, 10, 4, 11, 12, 16];
let numbers4ToFind = numbers4[0];
for (const num of numbers4) {
  if (num > numbers4ToFind) {
    numbers4ToFind = num;
  }
}
console.log('Найбільше число з масиву: ', numbers4ToFind);

// Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.

const numbers5 = [2, 5, 7, 8, 9, 10, 4, 11, 12, 16];
for (const num2 of numbers5) {
  if (num2 % 2 === 0) {
    console.log('Парні числа з масиву', num2);
  }
}
