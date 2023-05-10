import { cards } from '../../assets/mocks/cards';
import { CardsHandler } from '../../components/CardsHandler';
import { Filter } from '../../components/Filter';
import { Heading } from '../../components/Heading';
import { Container } from './styles';

export const Board = () => {
  return (
    <Container>
      <Heading boardName='Meu Kanban' profilePicUrl={`/user_1.jpg`} />

      <Filter />

      <CardsHandler cards={cards} />
    </Container>
  );
};
