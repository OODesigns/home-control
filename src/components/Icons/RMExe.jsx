import React from "react";
import HumidityIcon from "./HumidityIcon";

const RMExe = React.memo((props) => {
    return (
        <HumidityIcon {...props}>
            <g transform="translate(-0.206 11.818) scale(0.83337)">
                <ellipse
                    cx={-44.019}
                    cy={38.254}
                    rx={6.171}
                    ry={6.107}
                    className="white-path-empty stroke-wide"
                    transform="scale(-1 1)"
                />
                <ellipse
                    cx={-28.585}
                    cy={41.314}
                    rx={3.092}
                    ry={3.06}
                    className="white-path-empty stroke-wide"
                    transform="scale(-1 1)"
                />
                <path
                    d="M6.27 13.91h12.41"
                    className="white-path-empty stroke-narrow"
                    transform="matrix(-1.2937 0 0 1.28029 52.13 20.445)"
                />
                <path
                    d="M44.019 44.361H27.964M27.964 28.473v9.781M44.019 23.582v8.565"
                    className="white-path-empty stroke-wide"
                />
                <path
                    d="M.55 1.5h1.91l7.63 2.86"
                    className="white-path-empty stroke-narrow"
                    transform="matrix(-1.2937 0 0 1.28029 52.13 20.445)"
                />
                <path
                    d="m44.019 44.361 2.471 4.891M27.964 44.361v4.891"
                    className="white-path-empty stroke-wide"
                />
                <path
                    d="M21.794 49.252h29.625"
                    className="white-path-empty stroke-wide exercise-base"
                />
                <path
                    d="M24.252 27.257a4.243 4.2 0 0 0 2.988 1.216h4.424"
                    className="white-path-empty stroke-wide"
                />
                <ellipse
                    cx={-44.019}
                    cy={38.254}
                    rx={1.229}
                    ry={1.216}
                    className="white-path-empty stroke-wide"
                    transform="scale(-1 1)"
                />
            </g>
        </HumidityIcon>
    );
});

export default RMExe;
