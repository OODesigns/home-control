import PurgingStatus from "./PurgingStatus";
import ExchangingStatus from "./ExchangingStatus";
import CoolingStatus from "./CoolingStatus";
import HeatingStatus from "./HeatStatus";
import PropTypes from "prop-types";



const StatusIndicator = ({ status }) => {

    const statusComponents = {
        purging: <PurgingStatus/>,
        exchanging: <ExchangingStatus/>,
        cooling: <CoolingStatus/>,
        heating: <HeatingStatus/>
    };

    return (
        <g transform="translate(100,100)">
            {statusComponents[status] || <div></div>}
        </g>
    );
};

StatusIndicator.propTypes = {
    status: PropTypes.oneOf(['purging', 'exchanging', 'cooling', 'heating']).isRequired
};

export default StatusIndicator;