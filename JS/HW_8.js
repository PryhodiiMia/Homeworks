// 1. Напиши скрипт, який об'єднує всі елементи массива в один рядок. 
// Елементів може бути довільна кількість. Нехай елементи массива в рядку будут розділені комою.

// 👉 Спочатку через for
// 👉 Потім через join()

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

let string = '';
for(let i=0; i < friends.length; i += 1){
    string += friends[i];
    if(i < friends.length -1){
        string += ", "
    }
}
console.log("Через for: ", string)
console.log("Через join(): ", friends.join(' '));

// 2. Працюємо з колекцією карток в trello. Метод splice() (можна використати інші методи)
const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
];

// 3. Видалити
// *Видалення (по індексу), метод indexOf()

const cardToRemuve = 'Карточка-3';
const indexToRemuve = cards.indexOf(cardToRemuve);
if (indexToRemuve !== -1) {
    cards.splice(indexToRemuve, 1);
}
console.log("Після видалення:", cards);

// 4. Додати
// *Додавання (по індексу)

const cardToInsert = 'Карточка-6';
const insertIndex = 5;
cards.splice(insertIndex, 0, cardToInsert);
console.log("Після додавання:", cards);

// 5. Оновити
// *Оновлення (по індексу)

const cardToUpdate = 'Карточка-4';
const indexToUpdate = cards.indexOf(cardToUpdate);
const updatedValue = 'Оновлена ' + cardToUpdate;
if (indexToUpdate !== -1) {
    cards.splice(indexToUpdate, 1, updatedValue);
}
console.log("Після оновлення:", cards);