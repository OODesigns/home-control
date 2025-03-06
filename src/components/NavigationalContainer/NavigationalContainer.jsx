import PropTypes from "prop-types";
import Header from "../Header/Header"; // Assuming you have a Header component
import StatusBar from "../StatusBar/StatusBar"; // Assuming you have a StatusBar component
import "./NavigationalContainer.scss";
import HorizontalContainer from "../HorizontalContainer/HorizontalContainer.jsx";

export default function NavigationalContainer ({ caption, children }) {
    return (
        <div className="navigational-container">
            {/* Header with the caption */}
            <Header caption={caption}/>
            {/* CoreContainer with the children */}
            <HorizontalContainer id="navigational-child-container">{children}</HorizontalContainer>
            {/* StatusBar */}
            <StatusBar />
        </div>
    );
};

// PropTypes validation for props
NavigationalContainer.propTypes = {
    caption: PropTypes.string.isRequired, // Header caption
    children: PropTypes.node, // Children to pass to CoreContainer
};
