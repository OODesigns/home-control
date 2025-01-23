import "./Header.css";
import PropTypes from "prop-types";

export default function Header({caption}){
    return (
        <header className="header-container">
            <span className="header-caption">{caption}</span>
        </header>
    );
};

Header.propTypes = {
    caption: PropTypes.string.isRequired,
};

