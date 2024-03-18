import Character from "./character";

class Magician extends Character {
    constructor(name) {
        super(name, 'Magician');
        this.attack = 100;
    }
}

export default Magician