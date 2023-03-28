import { SearchIcon } from '../UI/icons/search';
import { SearchContainer, Bar } from './styles';

export const SearchBar = () => {
  return (
    <SearchContainer>
      <Bar>
        <SearchIcon />

        <input
          type='text'
          placeholder='Busque por cards, assuntos ou responsáveis...'
        />
      </Bar>
    </SearchContainer>
  );
};
