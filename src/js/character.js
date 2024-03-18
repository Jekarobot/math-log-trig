class Character {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this._attack = null;
        this._stoned = false;
        this.range = 1;
    }

    get attack() {
        let attackAfterDistance = this._attack * (1 - (this.range - 1) * 0.1);
        if (this.stoned) {
            attackAfterDistance -= Math.log2(this.range) * 5;
        }
        return attackAfterDistance;
    }

    set attack(value) {
        this._attack = value;
    }

    get stoned() {
        return this._stoned;
    }

    set stoned(value) {
        this._stoned = value;
    }
}

export default Character