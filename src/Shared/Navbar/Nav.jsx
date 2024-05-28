import { Spinner } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="mb-10 mt-4 max-w-7xl container mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLink
                to={'/'}
                className={({ isActive, isPending }) =>
                  isActive ? 'active' : isPending ? 'pending' : ''
                }
              >
                {' '}
                <li>Home</li>
              </NavLink>
              <NavLink
                to={'/donation'}
                className={({ isActive, isPending }) =>
                  isActive ? 'active' : isPending ? 'pending' : ''
                }
              >
                <li>Donation</li>
              </NavLink>
              <NavLink
                to={'/statistics'}
                className={({ isActive, isPending }) =>
                  isActive ? 'active' : isPending ? 'pending' : ''
                }
              >
                {' '}
                <li>Statistics</li>
              </NavLink>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img src="./images/Logo.png" alt="" className="h-full" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu  gap-8 menu-horizontal px-1">
            <button className="btn">
              <NavLink
                to={'/'}
                className={({ isActive, isPending }) =>
                  isActive ? (
                    'underline text-red-400'
                  ) : isPending ? (
                    <Spinner></Spinner>
                  ) : (
                    ''
                  )
                }
              >
                Home
              </NavLink>
            </button>
            <button className="btn">
              {' '}
              <NavLink
                to={'/donation'}
                className={({ isActive, isPending }) =>
                  isActive ? (
                    'underline text-red-400'
                  ) : isPending ? (
                    <Spinner></Spinner>
                  ) : (
                    ''
                  )
                }
              >
                Donation
              </NavLink>
            </button>
            <button className="btn">
              {' '}
              <NavLink
                to={'/statistics'}
                className={({ isActive, isPending }) =>
                  isActive ? (
                    'underline text-red-400'
                  ) : isPending ? (
                    <Spinner></Spinner>
                  ) : (
                    ''
                  )
                }
              >
                Statistics
              </NavLink>
            </button>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
