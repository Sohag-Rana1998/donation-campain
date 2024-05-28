import { Outlet } from 'react-router-dom';
import Nav from '../Shared/Navbar/Nav';

const Root = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <footer>this is footer</footer>
    </div>
  );
};

export default Root;
