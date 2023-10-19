import getTitleByResultsNumber from "./getTitleByResultsNumber.js";

describe('Fonction getTitleByResultsNumber', () => {

  test('devrait donner "Aucun résultat" pour un tableau vide', () => {
    const result = getTitleByResultsNumber([]);
    expect(result).toBe('Aucun résultat');
  });

  test('devrait donner "Un résultat" pour un tableau avec une seule valeur', () => {
    const result = getTitleByResultsNumber([1]);
    expect(result).toBe('Un résultat');
  });

  test('devrait donner "XX résultats" pour plusieurs résultats', () => {
    const result = getTitleByResultsNumber([2,3,4]);
    expect(result).toBe('3 résultats');
  });
  
});
