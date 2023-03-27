import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { Container } from './styles';

const App = () => {
  return (
    <Container className='App'>
      <Sidebar />

      <Outlet />
    </Container>
  );
};

export default App;
