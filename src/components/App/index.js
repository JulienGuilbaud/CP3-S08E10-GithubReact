import { useEffect, useState } from 'react';

import './style.scss';

import octocat from './github-mark.png';
import SearchForm from '../SearchForm';
import Results from '../Results';

import { sortRepositories } from '../../utils/exos';

function App() {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('react');

  const fetchRepos = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('https://api.github.com/search/repositories?q=' + search);
      const data = await response.json();
      setRepos(data.items);
      setIsLoading(false);
    } catch(error) {
      alert('Erreur lors de la récupération des dépots.');
    }
  };

  useEffect(() => {
    fetchRepos();
  }, [search]);

  return (
    <main>
      <h1>
        <img src={octocat} alt="" className="logo" />
        Rechercher des dépôts sur Github
      </h1>
      <SearchForm setSearch={setSearch} />
      <h2 className="app-title">Résultat de le recherche {search}</h2>
      {isLoading && <p>Veuillez patienter...</p>}
      {!isLoading && <Results repos={sortRepositories(repos)} />}
    </main>
  );
}

export default App;
