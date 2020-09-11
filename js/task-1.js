// Write code under this line
// Функции обратного вызова, которые возвращают число(Сумму и разницу в новом массиве)
const addIndex = (element, index) => element + index;
// Write code under this line
const subIndex = (element, index) => element - index;

function mapArray(array, cb) {
  'use strict';
  // Write code under this line
  // 2.Нужная длина для numbers и аргумент для задания длины равной array
  const numbers = new Array(array.length);
  for (let i = 0; i < array.length; i += 1) {
    const element = array[i];
    const index = i;
    numbers[i] = cb(element, index);
  }
  return numbers;
}

const arr = [1, 2, 3, 4, 5];

// Функция mapArray создает новый массив numbers
// и заполняет его числами из массива array преобразованными функцией cb.

// Оформи создание массива numbers нужной длины используя new Array()
// и необходимый аргумент для задания длины, равной длине array.

// Напиши функцию обратного вызова addIndex,
// которая принимает два параметра - element и index и возвращает число - сумму element и index(сложение).

// Напиши функцию обратного вызова subIndex,
//   которая принимает два параметра - element и index и возвращает число - разность element и index(вычитание).

console.log(mapArray(arr, addIndex));
// [1, 3, 5, 7, 9]

console.log(mapArray(arr, subIndex));
// [1, 1, 1, 1, 1]
