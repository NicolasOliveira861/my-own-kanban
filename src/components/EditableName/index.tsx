import { ChangeEvent, useEffect, useRef, useState } from 'react';
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
  const [width, setWidth] = useState(0);

  const handleToggleEditing = () => setIsEditing((prev) => !prev);

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  const span = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!span?.current) return;

    setWidth(span.current.offsetWidth);
  }, [name]);

  return (
    <Container>
      <span ref={span} id='hide'>
        {name}
      </span>

      <input
        type='text'
        style={isEditing ? { width: width + 20 } : { width: width + 5 }}
        className={isEditing ? 'editing' : ''}
        value={name}
        onChange={handleChangeName}
        autoFocus={isEditing}
      />
      {isEditing ? (
        <>
          <button type='button' onClick={handleToggleEditing}>
            <CheckIcon />
          </button>
        </>
      ) : (
        <>
          <button onClick={handleToggleEditing}>
            <EditIcon />
          </button>
        </>
      )}
    </Container>
  );
};
