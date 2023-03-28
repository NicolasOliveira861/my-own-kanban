import { SearchBar } from '../SearchBar';
import { FilterIcon } from '../UI/icons/filter';
import { Container, FilterButton } from './styles';

export const Filter = () => {
  return (
    <Container>
      <FilterButton type='button'>
        <FilterIcon />

        <p>Filtrar</p>
      </FilterButton>

      <SearchBar />
    </Container>
  );
};
