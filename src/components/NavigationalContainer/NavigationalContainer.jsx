import PropTypes from "prop-types";
import Header from "../Header/Header"; // Assuming you have a Header component
import CoreContainer from "../CoreContainer/CoreContainer"; // Assuming you have a CoreContainer component
import StatusBar from "../StatusBar/StatusBar"; // Assuming you have a StatusBar component
import "./NavigationalContainer.css";

export default function NavigationalContainer ({ caption, children }) {
    return (
        <div className="navigational-container">
            {/* Header with the caption */}
            <Header caption={caption}/>
            {/* CoreContainer with the children */}
            <CoreContainer>{children}</CoreContainer>
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
