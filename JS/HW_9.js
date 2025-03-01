// Завдання 1

// Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде
// виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].
// Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax']
// з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.

const logItems = function (array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
};

logItems(["Mango", "Poly", "Ajax"]);

// Завдання 2

// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію
// calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини)
// і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.

const calculateEngravingPrice = function (message, pricePerWord) {
  const words = message.split(" ");
  return words.length * pricePerWord;
};

console.log(calculateEngravingPrice("Hello World", 10));

// Завдання 3

// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки
// слова і прогалини) і повертає найдовше слово в цьому рядку.

const findLongestWord = function (string) {
  const words = string.split(" ");
  let longestWord = "";

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
};

console.log(findLongestWord("У далекому приголомшливому світі панувала тиша."));

// Завдання 4

// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.
// Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
// Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в
// кінець рядка три крапки '...', після чого повертає укорочену версію.

const formatString = function (string) {
  if (string.length <= 40) {
    return string;
  } else {
    return string.slice(0, 40) + "...";
  }
};

console.log(formatString("Сонце сяє над синім морем."));
console.log(formatString("Вечірнє небо забарвилося у відтінки помаранчевого, рожевого та фіолетового, створюючи чарівний пейзаж."));

// Завдання 5

// Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок.
// Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово, то функція
// повертає true, якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.

const checkForSpam = function (message) {
  const lowerMessage = message.toLowerCase();
  return lowerMessage.includes("spam") || lowerMessage.includes("sale");
};

console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("Get best SALE offers now!"));
console.log(checkForSpam("Beware of SPAM messages"));