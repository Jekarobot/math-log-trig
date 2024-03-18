import Daemon from "../daemon";

test('Проверяю конструктор', () => {
    const daemon = new Daemon("Alex");
    const correctDaemon = {
        name: "Alex",
        type: "Daemon",
        _attack: 200,
        _stoned: false,
        range: 1
    }
    expect(daemon).toEqual(correctDaemon);
});