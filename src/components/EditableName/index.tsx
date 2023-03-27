import { ChangeEvent, useState } from 'react';
import { CheckIcon } from '../UI/icons/check';
import { EditIcon } from '../UI/icons/edit';
import { Container } from './styles';

interface Props {
  boardName: string;
  // setBoardName: React.Dispatch<SetStateAction<string>>;
}

export const EditableName = ({ boardName }: Props) => {
  const [name, setName] = useState(boardName);
  const [isEditing, setIsEditing] = useState(false);

  const handleToggleEditing = () => setIsEditing((prev) => !prev);

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  return (
    <Container>
      {isEditing ? (
        <>
          <input type='text' value={name} onChange={handleChangeName} />
          <button type='button' onClick={handleToggleEditing}>
            <CheckIcon />
          </button>
        </>
      ) : (
        <>
          <h1>{name}</h1>
          <button onClick={handleToggleEditing}>
            <EditIcon />
          </button>
        </>
      )}
    </Container>
  );
};
