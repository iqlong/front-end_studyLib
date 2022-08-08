class Biology{
    bLog(){
        console.log('我是生物.')
    }
}
class Animal extends Biology{
    aLog(){
        super.bLog();
        console.log('我是动物.')
    }
}
class Cow extends Animal{
    aLog(){
        super.aLog();
        console.log('我是奶牛.')
    }
}
new Cow().aLog()

