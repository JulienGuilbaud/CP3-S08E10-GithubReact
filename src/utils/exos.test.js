import { truncate, colorNumber, sortRepositories } from "./exos.js";

describe('truncate', () => {

  test('devrait donner les 50 premiers caractères suivis de ... pour une longue phrase', () => {
    const result = truncate("012345678901234567890123456789012345678901234567890123456789");
    expect(result).toBe('01234567890123456789012345678901234567890123456789...');
  });

  test('devrait donner la même chaîne pour une phrase de moins de 50 caractères', () => {
    const result = truncate("0123");
    expect(result).toBe('0123');
  });

  test('devrait donner une chaîne vide dans le cas où la description est null', () => {
    const result = truncate(null);
    expect(result).toBe('');
  });

});

describe('colorNumber', () => {
  test('renvoie "green" pour les nombres inférieurs à 10', () => {
    expect(colorNumber(5)).toBe('green');
  });

  test('renvoie "orange" pour les nombres inférieurs à 100', () => {
    expect(colorNumber(50)).toBe('orange');
  });

  test('renvoie "red" pour les nombres supérieurs ou égaux à 100', () => {
    expect(colorNumber(100)).toBe('red');
  });
});

describe('sortRepositories', () => {
  test('devraient renvoyer un tableau d\'entrée trié par nombre d\'issues', () => {
    const input = [
      {name: 'Repo 1', open_issues: 100},
      {name: 'Repo 2', open_issues: 50},
      {name: 'Repo 3', open_issues: 200}
    ];
    const output = [
      {name: 'Repo 2', open_issues: 50},
      {name: 'Repo 1', open_issues: 100},
      {name: 'Repo 3', open_issues: 200}
    ];
    expect(sortRepositories(input)).toEqual(output);
  });
});
