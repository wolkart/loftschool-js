/* ДЗ 1 - Функции */

/*
 Задание 1:

 1.1: Добавьте к функции параметр с любым именем
 1.2: Функция должна возвращать аргумент, переданный ей в качестве параметра

 Пример:
   returnFirstArgument(10) вернет 10
   returnFirstArgument('привет') вернет `привет`

 Другими словами: функция должна возвращать в неизменном виде то, что поступает ей на вход
 */
function returnFirstArgument(param) {
	var returnFunc = param;
	return returnFunc;
}
var result = returnFirstArgument("Аргумент");
console.log("Задание 1:" + " " + result);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
 Задание 2:

 2.1: Функция должна возвращать сумму переданных аргументов

 Пример:
   sumWithDefaults(10, 20) вернет 30
   sumWithDefaults(2, 4) вернет 6

 2.1 *: Значение по умолчанию для второго аргумента должно быть равно 100

 Пример:
   sumWithDefaults(10) вернет 110
 */
function sumWithDefaults(a, b) {
	var sum = a + b; //  В переменную sum присваиваем сумму двух параметров фун-ии

	return sum; //  Возвращаем результат переменной sum
}

var resultFunc1 = sumWithDefaults(50, 30); // В переменную result присваиваем вызов фун-ии с аргументами

console.log("Задание 2.1:" + " " + resultFunc1); // Выводим переменную result в консоль   80

function sumWithDefaults2(a, b = 100) {
	var sum = a + b; //  В переменную sum присваиваем сумму параметра фун-ии и дефолтного аргумента

	return sum; //  Возвращаем результат переменной sum
}

var resultFunc2 = sumWithDefaults2(50); // В переменную result присваиваем вызов фун-ии с аргументом

console.log("Задание 2.1*:" + " " + resultFunc2); // Выводим переменную result в консоль    150

//////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
 Задание 3:

 Функция должна принимать другую функцию и возвращать результат вызова этой функции

 Пример:
   returnFnResult(() => 'привет') вернет 'привет'
 */
function returnFnResult(fn) {
	var resultFn = fn();

	console.log("Задание 3:" + " " + resultFn);
	return resultFn;
}

returnFnResult(() => "Привет");

////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
 Задание 4:

 Функция должна принимать число и возвращать новую функцию (F)
 При вызове функции F, переданное ранее число должно быть увеличено на единицу и возвращено из F

 Пример:
   var f = returnCounter(10);

   console.log(f()); // выведет 11
   console.log(f()); // выведет 12
   console.log(f()); // выведет 13
 */
function returnCounter(number) {
	return function() {
		return ++number;
	};
}

var f = returnCounter(10);

console.log("Задание 4:" + " " + f());
console.log("Задание 4:" + " " + f());
console.log("Задание 4:" + " " + f());

///////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
 Задание 5 *:

 Функция должна возвращать все переданные ей аргументы в виде массива
 Количество переданных аргументов заранее неизвестно

 Пример:
   returnArgumentsArray(1, 2, 3) вернет [1, 2, 3]
 */
function returnArgumentsArray() {
	let array = []; // присваиваем переменной array массив

	// перебираем встроенную в js переменную arguments
	for (let i = 0; i < arguments.length; i++) {
		array[i] = arguments[i]; // присваиваем массиву полученные аргументы
	}
	return array; // возвращаем массив
}

const resultConsole = returnArgumentsArray(55, "привет", 5, "бла", 7, 8, 3, 5, 32);

console.log("Задание 5*:" + " " + resultConsole);
/*
 Задание 6 *:

 Функция должна принимать другую функцию (F) и некоторое количество дополнительных аргументов
 Функция должна привязать переданные аргументы к функции F и вернуть получившуюся функцию

 Пример:
   function sum(a, b) {
     return a + b;
   }

   var newSum = bindFunction(sum, 2, 4);

   console.log(newSum()) выведет 6
 */
function sum(a, b) {
	return a + b;
}

// эта фун-я не делает сложения, а только связывает пар-ры и возвращает записанную в ее аргумент фун-ю
function bindFunction(fn, a, b) {
	const func = fn.bind(fn, a, b); // методом bind, привязываем к параметру fn другие параметры, и записываем в func

	return func; // возвращаем func
}

const resultBindFn = bindFunction(sum, 30, 20); // соответственно аргументы 10, 20 будут записаны в параметры фун-ии sum (которая их сложит), как если бы она была вызвана отдельно с этими пар-ми

console.log(resultBindFn());

export { returnFirstArgument, sumWithDefaults, returnArgumentsArray, returnFnResult, returnCounter, bindFunction };
