import './style.scss';
import { useState } from 'react'; 

function SearchForm({ setSearch }) {

  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.length > 2) {
      setSearch(value);
      setValue('');
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <form className="searchform" onSubmit={handleSubmit}>
        <label>
          <span>Mots clés</span>
          <input
            placeholder="React, Javascript, Express, ..."
            type="search"
            onChange={handleChange}
            value={value}
          />
        </label>
        <button type="submit">Lancer la recherche</button>
      </form>
      {value.length <= 2 && <p>La recherche doit faire plus de 2 caractères</p>}
    </>
  );
}

export default SearchForm;
