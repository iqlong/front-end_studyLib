var Person = /** @class */ (function () {
    function Person(k) {
        this.age = 18;
        this.name = k;
    }
    return Person;
}());
console.log(new Person('zhl').name);
