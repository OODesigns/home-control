import './VentModeSelector.scss'
import AutoMode from "./AutoMode";
import PurgeMode from "./PurgeMode";
import MVHRMode from "./MVHRMode";
import PropTypes from "prop-types";

const VentModeSelector = ({ selectedMode, onSelect }) => {

    const HandleOnSelect = (selectedMode) => {
        if (onSelect) {
            onSelect(selectedMode);
        }
    };

    return (
        <div className="svg-container">
            <svg
                width="300mm"
                height="300mm"
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

            </svg>
        </div>
    );
};

VentModeSelector.propTypes = {
    onSelect: PropTypes.func,
    selectedMode: PropTypes.string,
}

export default VentModeSelector;
