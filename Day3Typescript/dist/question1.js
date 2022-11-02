"use strict";
class University {
    constructor(name, dept) {
        this.name = name;
        this.dept = dept;
    }
    graduation(year) {
        console.log(`Graduating ${this.dept} ${year} students`);
    }
}
let miu = new University("MIU", "MSD");
miu.graduation(2021);
