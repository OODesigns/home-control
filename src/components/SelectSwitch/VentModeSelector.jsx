import AutoMode from "./AutoMode";
import PurgeMode from "./PurgeMode";
import MVHRMode from "./MVHRMode";
import PropTypes from "prop-types";
import StatusIndicator from "./StatusIndicator";

const VentModeSelector = ({ status, selectedMode, onSelect }) => {

    const HandleOnSelect = (selectedMode) => {
        if (onSelect) {
            onSelect(selectedMode);
        }
    };

    return (
        <div className="VentModeSelector">
            <svg
                viewBox="0 0 300 300"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
             >
                <MVHRMode
                    isSelected={selectedMode === "mvhr"}
                    onSelect={HandleOnSelect}
                />
                <AutoMode
                    isSelected={selectedMode === 'auto'}
                    onSelect={HandleOnSelect}
                />
                <PurgeMode
                    isSelected={selectedMode === 'purge'}
                    onSelect={HandleOnSelect}
                />
                <StatusIndicator status={status} />
            </svg>
        </div>
    );
};

VentModeSelector.propTypes = {
    onSelect: PropTypes.func,
    selectedMode: PropTypes.string,
    status: PropTypes.oneOf(['purging', 'exchanging', 'cooling', 'heating']).isRequired
}

export default VentModeSelector;


