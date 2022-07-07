import './Header.scss';

type ListItemProps = {
    page: string;
}

const ListItem = ({ page }: ListItemProps) => (
  <li className="navigation__li">
    <a href="/" className="navigation__a">
      <span className={`navigation__icon icon-${page.toLowerCase()}`} />
      <span className="navigation__text">{page}</span>
    </a>
  </li>
);

export default ListItem;
