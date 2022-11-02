"use strict";
let baseObject;
baseObject = {
    width: 0,
    length: 0
};
let rectangle = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function () {
    return this.width * this.length;
};
console.log(rectangle.calcSize()); // 10
