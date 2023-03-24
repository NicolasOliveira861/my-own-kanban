import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Sidebar } from '../../components/Sidebar';

const Container = styled.main`
  background: ${({ theme }) => theme.colors.purple.primary};
  width: 100%;
  height: 100%;
`;

const App = () => {
  return (
    <Container className='App'>
      <Sidebar />

      <Outlet />
    </Container>
  );
};

export default App;
