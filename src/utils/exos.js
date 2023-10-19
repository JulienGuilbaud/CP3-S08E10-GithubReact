function truncate(inputString) {
  if (inputString === null) {
    return '';
  }
  else if(inputString.length > 50) {
    return inputString.slice(0, 50) + "...";
  }
  else {
    return inputString;
  }
}

function colorNumber(num) {
  // Si le nombre est inférieur à 10, renvoie "green"
  if (num < 10) {
    return 'green';
  }
  // Si le nombre est inférieur à 100, renvoie "orange"
  else if (num < 100) {
    return 'orange';
  }
  // Si le nombre est supérieur ou égal à 100, renvoie "red"
  else {
    return 'red';
  }
}

function sortRepositories(repos) {
  return repos.sort((a, b) => a.open_issues - b.open_issues);
}

export { truncate, colorNumber, sortRepositories };