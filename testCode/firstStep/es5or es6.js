var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.say = function () {
        console.log('i am a person');
    };
    return Person;
}());
new Person().say();
