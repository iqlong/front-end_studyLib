/// <reference path="firstArea.ts"/>
/// <reference path="daoM.ts"/>
/// <reference path="daoF.ts"/>

function sayAoly(person:Aoly.Person){
    person.say()
}
sayAoly(new Aoly.daoF())
sayAoly(new Aoly.daoM())
