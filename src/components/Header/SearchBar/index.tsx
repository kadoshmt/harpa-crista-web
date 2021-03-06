import React, { useState, useCallback, useEffect } from 'react';

import { FiSearch } from 'react-icons/fi';

import { useHistory } from 'react-router-dom';
import { SearchContainer } from './styles';
import useWindowDimensions from '../../../utils/useWindowDimensions';

interface Props {
  displayProp?: string;
}

const SearchBar: React.FC<Props> = ({ displayProp = 'none' }) => {
  const [words, setWords] = useState<string>('');
  const { width } = useWindowDimensions();
  const [searchBarDisplay, setSearchBarDisplay] = useState(displayProp);

  const minWidthSearchBar = 600;

  const history = useHistory();

  const handleSearch = useCallback(
    async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault();

      setSearchBarDisplay('none');
      history.push(`/buscar?termo=${words}`);
    },
    [history, words],
  );

  useEffect(() => {
    setSearchBarDisplay(width > minWidthSearchBar ? 'block' : displayProp);
  }, [width, displayProp]);

  return (
    <SearchContainer style={{ display: searchBarDisplay }}>
      <form onSubmit={handleSearch}>
        <div>
          <input
            type="text"
            name=""
            placeholder="Que hino você procura?"
            onChange={e => setWords(e.target.value)}
          />
        </div>
        <button type="submit">
          <FiSearch size={20} />
        </button>
      </form>
    </SearchContainer>
  );
};

export default SearchBar;
