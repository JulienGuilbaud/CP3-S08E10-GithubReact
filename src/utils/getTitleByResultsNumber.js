function getTitleByResultsNumber(results) {
  switch (results.length) {
    case 0:
      return 'Aucun résultat';
    case 1 :
      return 'Un résultat';
    default:
      return `${results.length} résultats`;
  }
}

export default getTitleByResultsNumber;