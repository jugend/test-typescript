// Exercise 1
class Car {
  name: string
  acceleration: number = 0

  constructor(name: string) {
    this.name = name
  }

  public honk() {
    console.log('Toooooooo!')
  }

  public accelerate(speed: number) {
    this.acceleration = this.acceleration + speed
  }
}

const car = new Car('BMW')

car.honk()
console.log(car.acceleration)

car.accelerate(10)
console.log(car.acceleration)

// Exercise 2
abstract class BaseObject {
  width = 0
  length = 0

  constructor(width = 0, length = 0) {
    this.width = width
    this.length = length
  }
}

class Rectangle extends BaseObject {
  calcSize() {
    return this.width * this.length
  }
}

const rectangle = new Rectangle(5, 2)
console.log(rectangle.calcSize())

// Exercise 3
class Person {
  private _firstName = ''

  get firstName() {
    return this._firstName
  }

  set firstName(value:string) {
    if (value.length > 3) {
      this._firstName = value
    } else {
      this._firstName = ''
    }
  }
}

const person = new Person()
console.log(person.firstName)

person.firstName = 'Ma'
console.log(person.firstName)

person.firstName = 'Maximilian'
console.log(person.firstName)
