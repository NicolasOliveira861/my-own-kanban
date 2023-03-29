import { CogIcon } from '../UI/icons/cog';
import { DocumentIcon } from '../UI/icons/document';
import { PeopleIcon } from '../UI/icons/people';
import { TabletIcon } from '../UI/icons/tablet';
import { Logo } from '../UI/logo';
import { Container, Link, Links } from './styles';

export const Sidebar = () => {
  return (
    <Container>
      <Logo />

      <Links>
        <Link to={'/boards/1'}>
          <TabletIcon />

          <p>Boards</p>
        </Link>

        <Link to={'/people'}>
          <PeopleIcon />

          <p>Equipes</p>
        </Link>

        <Link to={'/documents'}>
          <DocumentIcon />

          <p>Relatórios</p>
        </Link>

        <Link to={'/settings'}>
          <CogIcon />

          <p>Ajustes</p>
        </Link>
      </Links>
    </Container>
  );
};
