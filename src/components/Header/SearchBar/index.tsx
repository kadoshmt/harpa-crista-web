import React, { useState, useCallback } from 'react';

import { FiSearch } from 'react-icons/fi';

import { useHistory } from 'react-router-dom';
import { SearchContainer } from './styles';

const SearchBar: React.FC = () => {
  const [words, setWords] = useState<string>('');

  const history = useHistory();

  const handleSearch = useCallback(
    async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault();

      history.push(`/buscar?termo=${words}`);
    },
    [history, words],
  );
  return (
    <SearchContainer>
      <form onSubmit={handleSearch}>
        <div>
          <input
            type="text"
            name=""
            placeholder="Que hino você está procurando?"
            onChange={e => setWords(e.target.value)}
          />
          <button type="submit">
            <FiSearch size={20} />
          </button>
        </div>
      </form>
    </SearchContainer>
  );
};

export default SearchBar;
