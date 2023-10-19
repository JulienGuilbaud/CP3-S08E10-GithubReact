/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import Results from './index.js';
import data from '../App/data.js';

describe('Le composant Results', () => {

  test('devrait avoir autant de ResultItem que de repos reçus en props', () => {
    render(<Results repos={data.items} />);
    expect(screen.queryAllByRole('article')).toHaveLength(30);
  });

  test('ne devrait avoir aucun ResultItem si le tableau reçu est vide', () => {
    render(<Results repos={[]} />);
    expect(screen.queryAllByRole('article')).toHaveLength(0);
  });

  // on pourrait test le contenu du titre, mais un peu redondant avec nos test de la fonction qui le calcul
  test('devrait avoir le titre "Aucun résultat" pour un tableau vide', () => {
    render(<Results repos={[]} />);
    expect(screen.getByRole('heading')).toHaveTextContent('Aucun résultat');
  });

});