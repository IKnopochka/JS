// Выведите с помощью цикла столбец чисел от 1 до 100

for (let i = 0; i < 100; i++) {
	console.log( i + 1 );
}

//Выведите с помощью цикла столбец чисел от 100 до 1.

for (let i = 100; i > 0; i--) {
	console.log(i);
}

//Выведите с помощью цикла столбец четных чисел от 1 до 100.

for ( let i = 2; i <= 100; i += 2 ) {
	console.log(i);
}

//Заполните массив 10-ю иксами с помощью цикла.

const arr = [];
for (let i = 0; i < 10; i++) {
	arr[i] = "x";
}
console.log(arr);

//Заполните массив числами от 1 до 10 с помощью цикла.

const arr = [];
for (let i = 0; i < 10; i++) {
	arr.push(i + 1);
}
console.log(arr);

//Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла. Дроби округляйте до двух знаков в дробной части.

const arr = [];
for (let i = 0; i < 10; i++) {
	arr.push(Math.random().toFixed(2));
}
console.log(arr);

//Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.

const arr = [];
for (let i = 0; i < 10; i++) {
	arr.push(Math.floor(Math.random() * 10) + 1);
}
console.log(arr);