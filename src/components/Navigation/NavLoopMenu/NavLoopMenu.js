import './NavLoopMenu.css';


function NavLoopMenu({onClose, isOpen}) {
    return (
        <><div className={`nav__popup ${isOpen ? 'nav__popup_opened' : ''}`}>
<div className="nav__popup-content">
    <button className="nav__popup-btn-close" type="button" aria-label="Закрыть" onClick={onClose}>
        <img className="nav__popup-btn-close-image" src={closeButton} alt="Закрыть" />
    </button>
    <nav className="nav__menu">
    <div className="nav__menu-info">
<NavLink exact to={PAGE_MAIN} activeClassName="nav__link_active" className="nav__link">Главная</NavLink>
<NavLink to={PAGE_MOVIES} activeClassName="nav__link_active" onClick={onClose} className="nav__link">Фильмы</NavLink>
<NavLink to={PAGE_MOVIES_COLLECTION} activeClassName="nav__link_active" onClick={onClose} className="nav__link">Сохранённые фильмы</NavLink>
</div>
<NavLink to={PAGE_PROFILE} activeClassName="nav__link_active" onClick={onClose} className="nav__link nav__link_account">
Аккаунт
<img src={account_icon} alt="иконка" className="nav__link nav__account-icon" />
</NavLink>
</nav>
</div>
</div>
</>
            )
}

export default NavLoopMenu;