import Magician from "../magician";

test('Проверяю конструктор', () => {
    const magician = new Magician("Alex");
    const correctMagician = {
        name: "Alex",
        type: "Magician",
        _attack: 100,
        _stoned: false,
        range: 1
    }
    expect(magician).toEqual(correctMagician);
});