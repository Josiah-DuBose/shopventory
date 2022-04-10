import { useMediaQuery } from 'react-responsive';
import './Navbar.scss';

const Navbar = () => {
    const isMobile = useMediaQuery({ query: `(max-width: 1150px)` });

    return (
        <div className="navbar">
            <h2 className="navbar__title">{isMobile ? `Dog's R Us` : `Dog App`}</h2>
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
            <div className="navbar__content">
                <div className="content__left">
                    <h3 className="left__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                    <p className="left__text">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="content__right">
                    <iframe
                        className="right__video"
                        src="https://www.youtube.com/embed/WDlu1OhvYBM"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
