import Character from "./character";

class Daemon extends Character {
    constructor(name) {
        super(name, 'Daemon');
        this.attack = 200;
    }
}    

export default Daemon