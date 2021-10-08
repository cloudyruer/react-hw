function MenuLink({ curActive, setCurActive, link }) {
  return (
    <li>
      <a
        href="#/"
        className={curActive === link ? 'active' : ''}
        onClick={() => setCurActive(link)}
      >
        {link}
      </a>
    </li>
  )
}

export default MenuLink
