import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const pages = ['Home', 'Contact', 'Resume'];

  return (
    <header className="header">

      <nav className="navigation">
        <ul className="navigation__ul">
          {pages.map((page) => (
            <NavLink
              to={`/${page === 'Home' ? '' : page.toLowerCase()}`}
              className={({ isActive }) => `navigation__li ${!isActive ? 'unselected' : 'active'}`}
              key={page}
            >
              <div className="navigation__a">
                <span className={`navigation__icon icon-${page.toLowerCase()}`} />
                <span className="navigation__text">{page}</span>
              </div>
            </NavLink>
          ))}
          <div className="navigation__indicator" />
        </ul>
      </nav>

    </header>
  );
};

export default Header;
