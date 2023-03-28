import { useEffect, useState } from 'react';
import { CardProps } from '../../typings/cards';
import { Card } from '../Card';
import { Column, Container, Cards } from './styles';

interface Props {
  cards: CardProps[];
}

export const CardsHandler = ({ cards }: Props) => {
  const [todo, setTodo] = useState<CardProps[] | []>([]);
  const [doing, setDoing] = useState<CardProps[] | []>([]);
  const [done, setDone] = useState<CardProps[] | []>([]);

  useEffect(() => {
    const todoArr = cards.filter((card) => card.state === 'to do');
    const doingArr = cards.filter((card) => card.state === 'doing');
    const doneArr = cards.filter((card) => card.state === 'done');

    if (todoArr) setTodo(todoArr);

    if (doingArr) setDoing(doingArr);

    if (doneArr) setDone(doneArr);
  }, []);

  return (
    <Container>
      <Column>
        <h1>A fazer</h1>

        <Cards>{todo && todo.map((card) => <Card {...card} />)}</Cards>
      </Column>

      <Column>
        <h1>Fazendo</h1>

        <Cards>{doing && doing.map((card) => <Card {...card} />)}</Cards>
      </Column>

      <Column>
        <h1>Feito</h1>

        <Cards>{done && done.map((card) => <Card {...card} />)}</Cards>
      </Column>
    </Container>
  );
};
