import RMShr from "../Icons/RMShr";
import RMBath from "../Icons/RMBath";
import RMExe from "../Icons/RMExe";
import RMStrs from "../Icons/RMStrs";
import RMKit from "../Icons/RMKit";
import HumidityIcon from "../Icons/HumidityIcon";

const HumidityOptions = {
    shower: RMShr,
    bath: RMBath,
    exercise: RMExe,
    stairs: RMStrs,
    kitchen: RMKit,
};

const HumidityContainer = ({ option, ...otherProps }) => {
    const IconComponent = HumidityOptions[option] || HumidityIcon;
    return <IconComponent {...otherProps} />;
};

export default HumidityContainer;
