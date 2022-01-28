// 1. Дана строка **'ddd@bbb@ccc'**. Замените все **@** на **'!'**
let str = "ddd@bbb@ccc";
document.write(str.replace(/@/g, "!"));

// Дана строка 'js'. Сделайте из нее строку 'JS'.
let a = "js";
let result = a.toUpperCase();
document.write(result);

// 3. Дана строка **'JS'**. Сделайте из нее строку **'js'**.
let b = "JS";
let res = b.toLowerCase();
document.write(res);

/*4. Дана строка**'I am a hero!'**.
 Выведите в консоль **количество символов** в этой строке.*/
let symbols = "I am a hero!";
let count = symbols.length;
document.write("There are " + count + " symbols");

/* 5. Составить скрипт, который запрашивает у пользователя ввести номер кред
 Скрипт должен обработать полученный номер и показать на странице последние 4 цифры
  а остальные цифры карты должны заменены на *.
  
    **Пример: "Номер вашей карты: **********1245"** */
let userCardprompt = prompt("Введите номер вашей карты: ");
let userCard = 12345678901234;
document.write(
  "Номер вашей карты: " +
    userCard.replace(userCard.slice(0, -4), "************")
);
