// Что бы получить массив с индексами,
//   еллементы которых в сумме равны заданному значению нужно:

// const array = [10, 20, 30];
// array.indexOf(20);
// console.log(array.indexOf(20));
// const keys = Object.keys(array);
// console.log(keys);

const sumIndex = function (array, number) {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    for (let j = i + 1; j < array.length; j += 1) {
      if (array[i] + array[j] === number) {
        // newArray.push(array[i], array[j]);
        newArray.push(i, j);
      }
    }
  }
  return newArray;
};

console.log(sumIndex([3, 2, 4], 6));
console.log(sumIndex([10, 20, 50, 60], 110));
// 1.Перебрать массив по элементам в цикле
// 2.Создать условие, правилом которого будет соответствие суммы заданному значению
// 3.Получить индексы этих элементов
// 4.создание нового массива и добавление в него индексов элементов суммы
