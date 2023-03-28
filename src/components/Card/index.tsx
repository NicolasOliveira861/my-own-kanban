import { CardProps } from '../../typings/cards';
import { Container, Tag, Tags } from './styles';

export const Card = ({ description, tags, title }: CardProps) => {
  return (
    <Container>
      <h2>{title}</h2>

      <p>{description}</p>

      {tags && (
        <Tags>
          {tags.map((tag) => (
            <Tag>{tag}</Tag>
          ))}
        </Tags>
      )}
    </Container>
  );
};
