import './Navbar.scss';

const Navbar = () => {
    console.log('Navbar')
    return (
        <div className="navbar">
            <h4 className="navbar__title">Dog App</h4>
            <ul className="navbar__links">
                <li className="navbar__link">
                    Home
                </li>
                <li className="navbar__link">
                    About
                </li>
                <li className="navbar__link">
                    Contact
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
