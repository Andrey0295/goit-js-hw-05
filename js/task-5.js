/*
 * Добавь `статический` метод
 * `getSpecs(car)`, который принимает
 * объект-машину как параметр
 * и возвращает шаблонную строку
 * со свойствами и значениями объекта.
 * Свойства:
 *   maxSpeed,
 *   speed,
 *   isOn,
 *   distance,
 *   price
 * Пример строки, полученной этим методом:
 * 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'
 */
class Car {
  static getSpecs(car) {
    return `maxSpeed: ${car.maxSpeed},
     speed: ${car.speed},
      isOn: ${car.isOn},
       distance: ${car.distance},
        price: ${car.price}`;
  }
  /*
   * Конструктор получает объект настроек.
   *
   * Добавь свойства будущеего экземпляра класса:
   *  speed - текущая скорость,
   *          начальное значение `0`
   *  price - цена автомобиля
   *  maxSpeed - максимальная скорость
   *  isOn - заведен ли автомобиль.
   *         Значения `true` или `false`,
   *         начальное значение false
   *  distance - пробег в километрах,
   *             начальное значение `0`
   */
  constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
    this.speed = speed;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }

  /*
   * Добавь геттер и сеттер
   * для свойства `price`, который будет
   * работать с свойством цены автомобиля.
   *
   * ВАЖНО: для записи методов get и set
   * значение параметра записывают с
   * подчеркиванием. См. ниже пример 1.
   */

  get price() {
    return this._price;
  }
  set price(value) {
    this._price = value;
  }
  turnOn() {
    this.isOn = false;
    this.speed = 0;
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
console.log(Car.getSpecs(mustang));
