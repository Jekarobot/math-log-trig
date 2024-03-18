import Character from "../character";

test('Проверяю конструктор', () => {
    const character = new Character("Alex", "Daemon");
    const correctCharacter = {
        name: "Alex",
        type: "Daemon",
        _attack: null,
        _stoned: false,
        range: 1
    }
    expect(character).toEqual(correctCharacter);
});

test('Проверяю attack со стандартными значениями', () => {
    const character = new Character("Alex", "Daemon");
    character.attack = 100;
    expect(character.attack).toBe(100);
})

test('Проверяю attack с измененным range', () => {
    const character = new Character("Alex", "Daemon");
    character.range = 2;
    character.attack = 100;
    expect(character.attack).toBe(90);
})

test('Проверяю stoned', () => {
    const character = new Character("Alex", "Daemon");
    character.stoned = true;
    expect(character.stoned).toBe(true);
})

test('Проверяю stoned с измененным attack', () => {
    const character = new Character("Alex", "Daemon");
    character.range = 2;
    character.stoned = true;
    character.attack = 100;
    expect(character.attack).toBe(85);
})
