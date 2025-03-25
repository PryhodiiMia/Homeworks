// 1.Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". 
// Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", 
// який дозволяє знімати гроші з рахунку. Використайте cofirm() щоб поповнити рахунок або отримати готівку 
// та prompt() щоб дізнатися сумму. Після проведення операції виводити повідомлення про залишок на рахунку.

const bankAccount = {
    ownerName: 'Johnny',
    accountNumber: 120111,
    balance: 100,
    addDeposit(amount) {
        const quantity = parseFloat(prompt('Введіть суму для поповнення.'));
        if (quantity > 0) {
            this.balance += quantity;
            alert(`Успіх! Ваш залишок на рахунку: ${this.balance}`);
        } else {
            alert('Помилка! Спробуйте ще раз.');
        }
    },
    getWithDraw() {
        const quantity = parseFloat(prompt('Введіть суму яку Ви хочете зняти.'));
        if (quantity > 0 && quantity <= this.balance) {
            this.balance -= quantity;
            alert(`Успіх! Ваш залишок на рахунку: ${this.balance}`)
        } else if (quantity > this.balance) {
            alert('Недостатньо коштів')
        }
    }
}
if (confirm('Поповнити рахунок?')) {
    bankAccount.addDeposit()
} else if (confirm('Зняти гроші з рахунку?')) {
    bankAccount.getWithDraw()
}

// 2.Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, 
// який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 
// 0 градусів Цельсія. Температуру потрібно отримати з prompt(). Якщо метод повернув "true" вивести повідомлення 
// “температура нижче 0 градусів Цельсія” і навпаки

const weather = {
    temperature: 12,
    humidity: 40,
    windSpeed: 4,
    temperatureQuantity(amount) {
        const temperatureAmount = parseFloat(prompt('Введіть температуру'));
        if (temperatureAmount < 0) {
            alert('температура нижче 0 градусів Цельсія')
        } else if (temperatureAmount >= 0) {
            alert('температура вище або дорівнює 0 градусів Цельсія')
        }
    }
}
weather.temperatureQuantity(123)

// 3.Створіть об’єкт "user", який буде мати властивості "name", "email", "password". Додайте метод "login", 
// який буде перевіряти правильність введеного email та password. 

const user = {
    name: 'Grigorii',
    email: 'grigorii@email.com',
    password: 'password',
    login(enteredEmail, enteredPassword) {
        if (enteredEmail === this.email && enteredPassword === this.password) {
            alert('Успішно введені дані');
        } else {
            alert('Неправильний email або пароль')
        }
    }
}
let enteredEmail;
let enteredPassword;
enteredEmail = prompt('Введіть ваш email:'); 
enteredPassword = prompt('Введіть ваш пароль:'); 
user.login(enteredEmail, enteredPassword)

// 4.Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту 
// метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. 
// Вивести значення властивостей в консоль.

const movie = {
    title:'Forrest Gump',
    director:'Robert Zemeckis',
    year:1994,
    rating:8.8,
    }
    const entries = Object.values(movie);
    console.log(entries);