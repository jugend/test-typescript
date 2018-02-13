"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
System.register("math/circle", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function calculateCirumcumference(diameter) {
        return diameter * PI;
    }
    exports_1("calculateCirumcumference", calculateCirumcumference);
    var PI;
    return {
        setters: [],
        execute: function () {
            exports_1("PI", PI = 3.14);
        }
    };
});
System.register("math/rectangle", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    function calculateRectangle(width, length) {
        return width * length;
    }
    exports_2("default", calculateRectangle);
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("app", ["math/circle", "math/rectangle"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var Circle, rectangle_1;
    return {
        setters: [
            function (Circle_1) {
                Circle = Circle_1;
            },
            function (rectangle_1_1) {
                rectangle_1 = rectangle_1_1;
            }
        ],
        execute: function () {
            console.log(Circle.PI);
            console.log(Circle.calculateCirumcumference(10));
            console.log(rectangle_1.default(20, 50));
        }
    };
});
// Exercise 1
var Car = /** @class */ (function () {
    function Car(name) {
        this.acceleration = 0;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log('Toooooooo!');
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car = new Car('BMW');
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
// Exercise 2
var BaseObject = /** @class */ (function () {
    function BaseObject(width, length) {
        if (width === void 0) { width = 0; }
        if (length === void 0) { length = 0; }
        this.width = 0;
        this.length = 0;
        this.width = width;
        this.length = length;
    }
    return BaseObject;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(BaseObject));
var rectangle = new Rectangle(5, 2);
console.log(rectangle.calcSize());
// Exercise 3
var Person = /** @class */ (function () {
    function Person() {
        this._firstName = '';
    }
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (value.length > 3) {
                this._firstName = value;
            }
            else {
                this._firstName = '';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var person = new Person();
console.log(person.firstName);
person.firstName = 'Ma';
console.log(person.firstName);
person.firstName = 'Maximilian';
console.log(person.firstName);
var MyMap = /** @class */ (function () {
    function MyMap() {
        this._map = {};
    }
    MyMap.prototype.setItem = function (key, value) {
        this._map[key] = value;
    };
    MyMap.prototype.getItem = function (key) {
        return this._map[key];
    };
    MyMap.prototype.clear = function () {
        this._map = {};
    };
    MyMap.prototype.printMap = function () {
        for (var key in this._map) {
            console.log(key, this._map[key]);
        }
    };
    return MyMap;
}());
var numberMap = new MyMap();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
numberMap.clear();
numberMap.printMap();
var stringMap = new MyMap();
stringMap.setItem('name', 'Max');
stringMap.setItem('age', '27');
stringMap.printMap();
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
