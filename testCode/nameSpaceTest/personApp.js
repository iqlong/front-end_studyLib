var x = function () {
    return 'x';
};
var obj = {
    a: function () {
        return 'g';
    }
};
/// <reference path="./firstArea.ts"/>
var Aoly;
(function (Aoly) {
    var daoM = /** @class */ (function () {
        function daoM() {
        }
        daoM.prototype.say = function () {
            console.log('我是刀妹');
        };
        return daoM;
    }());
    Aoly.daoM = daoM;
})(Aoly || (Aoly = {}));
/// <reference path="firstArea.ts"/>
var Aoly;
(function (Aoly) {
    var daoF = /** @class */ (function () {
        function daoF() {
        }
        daoF.prototype.say = function () {
            console.log('我是刀锋');
        };
        return daoF;
    }());
    Aoly.daoF = daoF;
})(Aoly || (Aoly = {}));
/// <reference path="firstArea.ts"/>
/// <reference path="daoM.ts"/>
/// <reference path="daoF.ts"/>
function sayAoly(person) {
    person.say();
}
sayAoly(new Aoly.daoF());
sayAoly(new Aoly.daoM());
