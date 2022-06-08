import { useState } from 'react';
import './searchform.scss';

function SearchForm({ filter }) {
  const [query, setQuery] = useState('');

  function submit(e) {
    e.preventDefault();
    filter(query);
    setQuery('');
  }
  return (
    <>
      <div className="container">
        <form onSubmit={submit}>
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            type="text"
          />
          <button type="submit">Найти</button>
        </form>
      </div>
    </>
  );
}

export default SearchForm;
