// Вам необхідно вказати, яким буде результат операції та описати крок за кроком у вигляді коментарів, 
// як відбувається перетворення в кожному прикладі:

// 'number' + 3 + 3
// console.log('number' + 3 + 3);
// result: number33
// першим значенням маємо строку, до цього типу прирівнюється число 3,
// додається за допомогою конкатенації до строки. те саме відбувається з другою трійкою

// null + 3
// console.log(null + 3);
// result: 3
// null це не строка і не число, але він прирівнюється до 0, тож 0 + 3 = 3

// 5 && "qwerty"
// console.log(5 && "qwerty");
// result: qwerty


// +'40' + +'2' + "hillel";
// console.log(+'40' + +'2' + "hillel");
// result: 42hillel
// + перед '40' перетворює значеня строки на числове, те саме відбуваться з '2'. 
// але так як останнє значення у нас строка, то сума перших двох (42) прирівнюються до строки і додається до  "hillel"

// '10' - 5 === 6;
// console.log('10' - 5 === 6);
// result: false
// '10' прирівнюється до числа і відбувається математична операцію віднімання: 10 - 5 = 5
// далі ми порівнюємо 5 та 6 оператором строгої рівності, і так як 6 більше ніж 5, ми отримуємо false

// true + false
// console.log(true + false);
// result: 1
// через плюс у прикладі true прирівнюється до 1, а false до 0, відповідно 1 + 0 = 1

// '4px' - 3
// console.log('4px' - 3);
// result: NaN
// знак - працює виключно як віднімання, js не можу перетворити '4px' в число через наявні літери в строці, тому в даному випадку ми отримуємо NaN

// '4' - 3
// console.log('4' - 3);
// result: 1
// на відміну від поперденього випадку, тут '4' може бути перетворений на число. тоді відбувається математична операція віднімання: 4 - 3 = 1

// '6' + 3 ** 0;
// console.log('6' + 3 ** 0);
// result: 61
// оператор ** має вищий пріоритет ніж оператор +, тож першою дією відбувається піднемення 3 до 0 степеню. тут ми отримуємо 1. 
// далі оператором + відбувається конкатенація строки '6' та числа 1

// 12 / '6'
// console.log(12 / '6');
// result: 2
// в даному випадку строка '6' успішно перетворюється на число і відбувається математична операція ділення: 12 / 6 = 2

// '10' + (5 === 6);
// console.log('10' + (5 === 6));
// result: 10false
// спочатку відбувається дія в дужках, а саме прирівнювання 5 до 6, в результаті отримуємо false.
// далі шляхом конкатенації за допомогою + об'єднуються строка '10' та false

// null == ''
// console.log(null == '');
// result: false
// null не може бути прирівняний до строки, тож тут ми отримуємо false

// 3 ** (9 / 3);
// console.log(3 ** (9 / 3));
// result: 27
// спочатку виконується дія в дужках: 9 / 3 = 3. далі піднесення 3 у 3 степінь: 3 * 3 * 3 = 27

// !!'false' == !!'true'
// console.log(!!'false' == !!'true')
// result: true
// !!'false' перетворюється в true, !!'true' також перетворюється в true

// 0 || '0' && 1
// console.log(0 || '0' && 1);
// result: 1
// оператор && має вищий пріорітет, тому ця операція виконується першою. у даному випадку, '0' є true (непорожній рядок), і число 1 також є true. тож для цієї операції ми отримуємо true
// далі ми переходимо до '0 || 1', у даному випадку, 0 є false, а 1 є true, тому в результаті отримуємо 1

// (+null == false) < 1;
// console.log((+null == false) < 1);
// result: false
// через + який стоїть перед null, null перетворюється на числове значення - 0. false під час порівння теж прирівнюється до 0. далі ми порівнюємо 0 та 0: 0 == 0: true
// true = 1. 1 < 1 = false

// false && true || true
// console.log(false && true || true);
// result: true
// спочатку виконується операція false && true. у цьому випадку ми отримуємо false, оскільки це перше значення, яке не є істинним.
// тепер вираз виглядає як false || true, оператор || повертає перше правдиве значення або останнє неправидиве значення, якщо всі операнди false
// у цьому випадку, false є неправидивм значенням, а true - правдивим, тому результатом буде true

// false && (false || true);
// console.log(false && (false || true));
// result: false
// спочатку виконується дія в дужках false || true, де false є неправиливим значеням , а true є правдивим. оскільки true є першим правдивим значенням, результатом виразу false || true буде true.
// тепер основний вираз виглядає як false && true. так як false є першим значенням і воно є неправдивим, результатом буде false

// (+null == false) < 1 ** 5;
// console.log((+null == false) < 1 ** 5);
// result: false
// оператор піднесення до степеня має вищий пріоритет, тому спочатку буде виконано 1 ** 5 = 1
// +null перентворюється на 0, що дорівнює false, тому вираз +null == false є правдивим (true)
// далі true прирівнюється до 1 і маємо вираз 1 < 1 що дорівнює false, оскільки 1 не менше ніж 1
