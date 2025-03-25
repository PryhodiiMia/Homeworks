// Завдання 1

// Напиши скрипт, який, для об'єкта user, послідовно:

// ~додає поле mood зі значенням 'happy'
// ~замінює значення hobby на 'skydiving'
// ~замінює значення premium на false
// ~виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of

const user = {
    name:'Christopher',
    age:23,
    hobby:'diving',
    premium:true,
}
user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false
const userKeys = Object.keys(user)
for (const key of userKeys) {
    console.log(key + ': ' + user[key]);
}
console.log(user);

// Завдання 2

// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.

const obj = {
    first:1,
    second:'hi',
    third:'goodbye',
}
function countProps(obj){
 Object.keys(obj).length
}
console.log(obj);
console.log(countProps(obj));

// Завдання 3

// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я 
// найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться 
// як властивості об'єкта в форматі "ім'я":"кількість задач".

const employees1 = {
    'John': 10,
    'Jim': 15,
    'Harry': 8,
    'Oliver': 20
  };
  
  const findBestEmployee = function (employees) {
    let max = 0;
    let name;
    const keys = Object.keys(employees)
    for (const key of keys) {
        if (employees[key] > max) {
            max = employees[key]
            name = key
        }
    }
    return name
}
console.log(findBestEmployee(employees1));

// Завдання 4

// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати 
// працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".

const employers = {
    "Dexter":12,
    "Jason":1,
    "Pablo":20,
    "Nikita":5,
}
const countTotalSalary = function (employees) {
    let total = 0;
    const values = Object.values(employees)
    for (const value of values) {
        total += value
    }
    return total
}
console.log(countTotalSalary(employers));

// Завдання 5

// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. 
// Повертає масив значень певної властивості prop з кожного об'єкта в масиві.

const fruits = [
    { name: 'Apple', color: 'Red', weight: 150, quantity:3, price:1000, },
    { name: 'Banana', color: 'Yellow', weight: 120, quantity:7, price:5800 },
    { name: 'Grapes', color: 'Green', weight: 50, quantity:12, price:1600 },
    { name: 'Orange', color: 'Orange', weight: 200, quantity:8, price:6000 }
  ]; 
const getAllPropValues = function (arr, prop) {
    const values = []
    for (const product of arr) {
        if (prop in product) {
            values.push(product[prop])
        }
    }
    return values
}
console.log(getAllPropValues(fruits, 'name'));
console.log(getAllPropValues(fruits,'color'));

// Завдання 6

// Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я 
// продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).

// Викличи функції для перевірки працездатності твоєї реалізації.

const calculateTotalPrice = function (allProducts, productName) {
    let total = 0;
    for (const fruit of allProducts) {
        if (fruit.name === productName) {
            total = fruit.price * fruit.quantity
        }
    }
    return total
}
console.log(calculateTotalPrice(fruits, 'Apple'))
console.log(calculateTotalPrice(fruits, 'Banana'))