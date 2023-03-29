import { EditableName } from '../EditableName';
import { Container, ImageContainer } from './styles';

interface Props {
  boardName: string;
  profilePicUrl: string;
}

export const Heading = ({ boardName, profilePicUrl }: Props) => {
  return (
    <Container>
      <EditableName boardName={boardName} />

      <ImageContainer>
        <img src={profilePicUrl} alt='Profile picture' />
      </ImageContainer>
    </Container>
  );
};
