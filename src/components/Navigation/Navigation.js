import './Navigation.css';

function Navigation({onClose, isOpen}) {

    return (
        <>
        <div className="navigation">
            <nav className="nav__menu">
        <img className="nav__menu-btn" src={menu_icon} type="button" alt="Открыть" onClick={onMenuBtnClick} />
            <NavLoopMenu
            isOpen={isOpen}
            onClose={onClose}
             />
        <ul className="nav__menu">
            <li><a href="#">О комплексе</a></li>
            <li><a href="#">Блог</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Контакты</a></li>
        </ul>
        <ul className="nav__menu">
            <li><a href="#">RU</a></li>
            <li><a href="#">ENG</a></li>
        </ul>
        <ul className="nav__menu">
            <li><a href="#">Вход</a></li>
            <li><a href="tel:88005006847">8 800 500 6847</a></li>
        </ul>
            </nav>
        </div>
        </>
            )
}
export default Navigation;