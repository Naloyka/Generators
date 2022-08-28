export default class Person {
    constructor(
        readonly name:string,
        readonly type:string,
        readonly health:number,
        readonly level:number,
        readonly attack:number,
        readonly defence:number) {
            this.name = name;
            this.type =  type;
            this.health = health;
            this.level = level;
            this.attack = attack;
            this.defence = defence;
    }
}

