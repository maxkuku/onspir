import { Outlet, Link } from 'react-router-dom';
// import { InputMoney } from '../InputMoney/InputMoney';
import './Layout.css';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/sogl'>Sogl</Link>
          </li>
          <li>
            <Link to='/sklad'>Sklad</Link>
          </li>
          <li>
            <Link to='/tsennosti'>Tsennosti</Link>
          </li>
          <li>
            <Link to='/jur'>Юридический</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
      {/* <InputMoney/> */}

      
    </>
  )
};

export default Layout;